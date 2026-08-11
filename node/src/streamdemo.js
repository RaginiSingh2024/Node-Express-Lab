
import fs from "fs"; import http from "http"; import zlib from "zlib";
// Create a readable stream
const readableStream = fs.createReadStream("bigfile.txt", { encoding: "utf-8",
});
highWaterMark: 64 * 1024 // 64 KB chunks
// Listen to data events
readableStream.on("data", (chunk) => {
});
console.log("Received chunk:", chunk.length);
