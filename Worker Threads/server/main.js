const { Worker } = require("worker_threads");

console.log("Main thread started");

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
  console.log("Result from worker:", result);
});

worker.on("error", (err) => {
  console.error(err);
});

console.log("Main thread still running...");
