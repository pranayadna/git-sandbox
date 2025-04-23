const { request } = require("https");

const req = request("https://www.google.com", (res) => {
  res.setEncoding("utf8");
  res.on("data", (chunk) => console.log(chunk));
  res.on("end", () => {
    console.log("No more data");
  });
});

req.end();
