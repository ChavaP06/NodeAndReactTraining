const express = require("express");
const PORT = 4000//Define a backend port
const app = express();
const cors = require("cors");

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api", require("./api/api"))//link API

const db = require("./models");

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
  });
});
