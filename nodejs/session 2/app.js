// receive request from client
// get the request url
// send html file based on request url

const http = require("http");
const fs = require("fs");
const url = require("url");

const app = http.createServer((req, res) => {
  // const url = req.url;
  // console.log(url)

  //   switch (url) {
  //     case "/":
  //     case "/index":
  //       sendFile("index.html", res);
  //       break;
  //     case "/about":
  //       sendFile("about.html", res);
  //       break;
  //     case "/main.js":
  //       sendFile("main.js", res);
  //       break;
  //     default:
  //       sendFile("404.html", res);
  //       break;
  //   }

  const reqUrl = url.parse(req.url, true);
  switch (reqUrl.pathname) {
    case "/":
    case "/index":
      sendFile("index.html", res);
      break;
    case "/about":
      sendFile("about.html", res);
      break;
    case "/main.js":
      sendFile("main.js", res);
      break;
    case "/todo-manager":
      sendFile("taskManager/index.html", res);
      break;
    case "/app.js":
      sendFile("taskManager/app.js", res);
      break;
    case "/calc":
      const query = reqUrl.query;
      const result = Number(query.x) + Number(query.y);
      res.end(result.toString());
      break;
    default:
      sendFile("404.html", res);
      break;
  }

//   res.end("Test");
});

function sendFile(filaPath, res) {
  console.log("Request Of File: " + filaPath);
  try {
    const file = fs.readFileSync(filaPath);
    res.end(file);
  } catch (err) {
    console.log(err);
    res.end("Server Has Error");
  }
}

app.on("listening", () => console.log("Server Running On Port 3000"));

app.listen(3000);
