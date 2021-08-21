require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + "/app"));

// Routes
/* =============== */
// Main pages
app.get("/:name", (req, res) => {
  let docName = req.params.name;

  res.sendFile(`${docName}.html`, { root: `${__dirname}/app` });
});

// Subject pages
app.get("/subjects/:name", (req, res) => {
  let docName = req.params.name;

  res.sendFile(`${docName}.html`, { root: `${__dirname}/app/subjects` });
});

app.listen(port, () => {
  console.log(`App available at http://localhost:${port}`);
});
