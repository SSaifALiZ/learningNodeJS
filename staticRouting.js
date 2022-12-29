const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request was made", req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact-us") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/anything") {
    const arrObj = [
      { name: "kid", age: 1 },
      { name: "old", age: 100 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arrObj));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }

  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   const myObj = {
  //     name: "Saif",
  //     job: "Developer",
  //     age: 29,
  //   };
  //   res.end(JSON.stringify(myObj));
});

server.listen(3000, "127.0.0.1");
console.log("listening to 3000");
