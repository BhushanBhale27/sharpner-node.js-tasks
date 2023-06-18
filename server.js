// //  The line const http = require('http') is importing the Node.js built-in http module, which provides functionality to create an HTTP server and make HTTP requests.In Node.js, the require() function is used to import modules.

// //The http module is a core module in Node.js, so there is no need to install it separately. By using require('http'), you can access the features and functions provided by the http module in your Node.js application.:--

// const http = require("http");

// // function rqListner(req, res) {

// // }

// const server = http.createServer((req, res) => {
//   console.log("Bhushan Bhale Bhushan");
// });

// server.listen(4000)

// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log("This is my server");
// });

// server.listen(4001)

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //routing requests:-
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>my message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button>Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync("message.txt", "dummy");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  //print responses:-
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>server page</title></head>");
  res.write("<body><h1>This is my Server....</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
