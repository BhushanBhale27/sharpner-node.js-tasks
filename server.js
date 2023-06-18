// //  The line const http = require('http') is importing the Node.js built-in http module, which provides functionality to create an HTTP server and make HTTP requests.In Node.js, the require() function is used to import modules.

// //The http module is a core module in Node.js, so there is no need to install it separately. By using require('http'), you can access the features and functions provided by the http module in your Node.js application.:--

// const http = require("http");

// // function rqListner(req, res) {

// // }

// const server = http.createServer((req, res) => {
//   console.log("Bhushan Bhale Bhushan");
// });

// server.listen(4000)

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("This is my server");
});

server.listen(4001)

