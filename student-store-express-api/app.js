const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const storeRouter = require("./routes/storeRoutes");

const app = express();

//Middleware
app.use(express.json());

//Enable Cors
app.use(cors());

//Enable Morgan
app.use(morgan("tiny"));

//Routes
app.use("/", storeRouter);

module.exports = app;
