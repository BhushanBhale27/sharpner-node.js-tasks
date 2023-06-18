const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/home") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>HOME</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>HOME</title></head>");
    res.write("<body><h1>Welcome to About Us Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>HOME</title></head>");
    res.write("<body><h1>Welcome to my node js project</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
