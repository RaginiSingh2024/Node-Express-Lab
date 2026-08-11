import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());

// ------------------ MongoDB Connect ------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();

// ------------------ Session Setup ------------------
app.use(
  session({
    secret: process.env.SESSION_SECRET, // must be in .env
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 10 } // 10 minutes
  })
);

// ------------------ Dummy User ------------------
const USER = {
  username: "ragini",
  password: "12345"
};

// ------------------ Routes ------------------

// Home
app.get("/", (req, res) => {
  res.send("Welcome to Login With Session App!");
});

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    req.session.user = username;
    return res.json({ message: "Login Successful", session: req.sessionID });
  }

  return res.status(400).json({ message: "Invalid Credentials" });
});

// Profile Route
app.get("/profile", (req, res) => {
  if (req.session.user) {
    return res.json({ message: "Profile Accessed", user: req.session.user });
  }
  return res.status(401).json({ message: "Unauthorized. Please login." });
});

// Logout Route
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged Out Successfully" });
  });
});

// ------------------ Start Server ------------------
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
