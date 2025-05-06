require("dotenv").config();

const express = require("express");

const initSchema = require('./db/initSchema');


const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3200;

app.use(bodyParser.json());

initSchema();

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
