// room.js
export function registerRoomHandlers(io) {
    io.on("connection", (socket) => {
        console.log("User connected to room:", socket.id);

        // Join room
        socket.on("joinRoom", (room) => {
            socket.join(room);
            socket.to(room).emit("message", `A new user has joined the room: ${room}`);
        });

        // Room message
        socket.on("room message", ({ room, message }) => {
            io.to(room).emit("message", message);
        });

        // Disconnect
        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
}
