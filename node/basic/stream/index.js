const fs = require("fs");

const writeableStream = fs.createWriteStream("output.txt");
const readableStream = fs.createReadStream("./input.txt", {
  highWaterMark: 15,
});

readableStream.on("readable", () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`);
  } catch (error) {}
});

readableStream.on("end", () => {
  writeableStream.end();
});
