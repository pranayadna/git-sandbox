const fs = require("fs");
const path = require("path");

path.resolve(__dirname, "notes.txt");

const fillReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("notes.txt", "utf-8", fillReadCallback);
