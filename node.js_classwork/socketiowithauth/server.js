import express from "express";
import session from "express-session";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

import { registerChatHandlers } from "./chatHandler.js";

// Fix dirname (ESM support)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);

// Session middleware
const sessionMiddleware = session({
  secret: "my-secret",
  resave: false,
  saveUninitialized: true
});

app.use(sessionMiddleware);

// Serve static HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Socket.io
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  }
});

// Convert session middleware for Socket.io
io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});

// On connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Attach chat handlers
  registerChatHandlers(io, socket);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Run server
httpServer.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
