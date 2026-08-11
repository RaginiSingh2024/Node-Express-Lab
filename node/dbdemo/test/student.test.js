import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import { createServer } from "http";

let server;
let token;

beforeAll(async () => {
  // Connect to test DB
  await mongoose.connect("mongodb://127.0.0.1:27017/student-test-db");

  // Start test server on a random port
  server = createServer(app);
  await new Promise(resolve => server.listen(0, resolve));

  // Register & Login user to get token
  await request(server)
    .post("/api/auth/register")
    .send({ username: "studentuser", password: "password123" });

  const loginRes = await request(server)
    .post("/api/auth/login")
    .send({ username: "studentuser", password: "password123" });

  token = loginRes.body.token;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();  // delete test data
  await mongoose.connection.close();
  await new Promise(resolve => server.close(resolve));
});

describe("Student Routes", () => {
  it("should get all students (unprotected)", async () => {
    const res = await request(server).get("/api/students");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a student when authorized", async () => {
    const res = await request(server)
      .post("/api/students")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Asha", age: 22, enrolled: true });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("Asha");
  });

  it("should fail to create a student without token", async () => {
    const res = await request(server)
      .post("/api/students")
      .send({ name: "NoToken", age: 20 });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("No token provided");
  });
});
