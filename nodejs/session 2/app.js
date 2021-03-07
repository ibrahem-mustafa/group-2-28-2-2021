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

  const todos = [
    {
      userId: 1,
      id: 1,
      title: "todo one",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
  ];

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
    case "/todos":
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(todos))
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
