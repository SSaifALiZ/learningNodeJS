const fs = require("fs");

// fs.readFile("./readMe.txt", "utf8", (err, data) => {
//   console.log(err, "====>", data);
// //   fs.writeFileSync("writeMe.txt", "im write me");
// });
// fs.unlink("writeMe.txt");

// console.log("====>");
// make directory
// fs.mkdirSync("staff");
fs.mkdir("staff", () => {
  fs.readFile("readMe.txt", "utf8", (err, data) =>
    fs.writeFile("./staff/writeMe.txt", data)
  );
});
// fs.rmdirSync("staff");
