// const stuff = require("./stuff");
const events = require("events");

const myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", (msg) => console.log("sdfghjkl", msg));

myEmitter.emit("someEvent", "sdfghjk");

// console.log(stuff?.counter(["", "", "", "", ""]));
// console.log(stuff?.adder(stuff?.pi, stuff?.pi));
// console.log(stuff);
// console.log(JSON.stringify(stuff));
// console.log(JSON.parse(JSON.stringify(stuff)));
