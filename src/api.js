const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const router = express.Router();

app.use(cors());

router.get("/", (req, res) => {
  res.send("App is running..");
});

router.get("/test", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Test",
    },
  ]);
});

router.get("/books", (req, res) => {
  res.json({
    data: [
      {
        title: "Test POST",
        author: "Lesław Dzik",
        pageNum: 288,
        imageURL:
          "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/szkolne-lifehacki-b-iext164461140.jpg",
        topic: "IT",
        id: 1,
      },
      {
        title: "Test POST",
        author: "Lesław Dzik",
        pageNum: 288,
        imageURL:
          "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/szkolne-lifehacki-b-iext164461140.jpg",
        topic: "IT",
        id: 2,
      },
      {
        title: "Test POST",
        author: "Lesław Dzik",
        pageNum: 288,
        imageURL:
          "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/szkolne-lifehacki-b-iext164461140.jpg",
        topic: "IT",
        id: 3,
      },
      {
        title: "Test POST",
        author: "Lesław Dzik",
        pageNum: 288,
        imageURL:
          "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/szkolne-lifehacki-b-iext164461140.jpg",
        topic: "IT",
        id: 4,
      },
    ],
  });
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
