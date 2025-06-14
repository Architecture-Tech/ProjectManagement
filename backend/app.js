

// imports modules & dependencies
const express = require("express");
const env = require("dotenv");
const favicon = require("serve-favicon");
var path = require("path");
var cors = require("cors");
const morgan = require('morgan');
const passport = require('./src/utils/passport');


// imports routes, middleware, and configs
const commanages = require("./src/routes/commanage.route");
const { notFoundRoute, errorHandler } = require("./src/configs/errorHandler");

env.config();

const app = express();

const connectDatabase = require("./src/db/connect");
connectDatabase();

app.use(cors());
app.use(morgan('dev'));

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use('/api/v1',express.static(path.join(__dirname, "uploads")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Architecture-tech-Manage Node.js application backend." });
});

app.use(process.env.APP_API_PREFIX, commanages);

app.use(notFoundRoute);

app.use(errorHandler);

// app.use('/', express.static(path.join(__dirname, "uploads")));



app.listen(process.env.APP_PORT, () => {
  console.log("Architecture-tech-Manage backend server running on: " + process.env.APP_BASE_URL, process.env.APP_API_PREFIX);
});
