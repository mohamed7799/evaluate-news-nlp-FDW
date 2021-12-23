const dotenv = require("dotenv");

const express = require("express");

const axiox = require("axios");

const cors = require("cors");

const path = require("path");

const mockAPIResponse = require("./mockAPI.js");

dotenv.config();

const PORT = 8081;

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

app.use(express.static("../client"));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/postData", async (req, res) => {
  const resData = await axiox({
    method: "post",
    url: "https://api.meaningcloud.com/sentiment-2.1",
    data: {
      key: process.env.API_KEY,
      url: req.body.url,
      lang: "auto",
    },
  });

  const { score_tag, agreement, subjectivity, confidence, irony } =
    resData.data;

  res.json({
    score_tag,
    agreement,
    subjectivity,
    confidence,
    irony,
  });
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

// TODO: export app to use it in the unit testing
