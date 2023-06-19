const fs = require("fs");

const handler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("message.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write("<html>");
      res.write("<head><title>my message</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message" /><button>Submit</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.html", message, (err) => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

// module.exports = handler;

/* module.exports = {
    handler:handler,
    someText:"hard coded text"

}

*/

exports.handler = handler
exports.someText = "Hard coded text"


