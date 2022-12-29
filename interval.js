console.log("NodeJs");
setTimeout(() => console.log("after 3 seconds"), 3000);
let time = 0;
// setInterval(() => {
//   time += 2;
//   console.log(time + " has passed");
// }, 2000);
const timer = setInterval(() => {
  time += 2;
  console.log(time + " has passed");
  if (time > 6) clearTimeout(timer);
}, 2000);
