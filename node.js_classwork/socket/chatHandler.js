export function registerChatHandlers(io, socket) {
  console.log("Chat handler active for:", socket.id);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
}
