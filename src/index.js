const express = require("express");
const {
  generateRandomNumber,
  countCharacter,
  generateFakeProfile,
} = require("./logics");

const app = express();

app.get("/random-number", (req, res) => {
  const start = parseInt(req.query.start);
  const end = parseInt(req.query.end);

  res.json({ RandomNumber: generateRandomNumber(start, end) });
});

app.get("/count-character", (req, res) => {
  const str = req.query.str;

  res.json({ countCharacter: countCharacter(str) });
});

app.get("/fake-profile-address", (req, res) => {
  const { properties } = req.query;
  const propertiesArr = properties.split(",").map(item => item.toLowerCase());
  res.json(generateFakeProfile(propertiesArr));
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
