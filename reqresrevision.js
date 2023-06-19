const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My Server</title></head>");
    res.write("<body><h1>This is Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/form") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="name" /><button>SEND</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "message from me");
    res.statusCode = 302;
    res.setHeader("Location" , "/")
    res.end()
  }
});

server.listen(4001);
