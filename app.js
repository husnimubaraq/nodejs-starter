require("dotenv").config();

const createError = require("http-errors");
// const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const { app, express } = require("./configs/express");
const credentials = require("./middlewares/credentials");
const rateLimit = require("./middlewares/ratelimit");
const { corsoption, whitelist } = require("./configs/cors");
const { response } = require("./utils");

const router = require("./routes");

// const app = express();

app.use(helmet());
app.use(credentials);
app.use(cors(corsoption));

app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES
app.get("/", (req, res) => res.redirect(proceess.env.APP_DOMAIN));

// API ROUTES
if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);

app.use(rateLimit);
app.use(`/${process.env.API_ENDPOINT}/${process.env.API_VERSION}/public`, (req, res, next) => {
  res.header("Cross-Origin-Resource-Policy", "cross-origin");

  next();
}, express.static(path.join(__dirname, "public")));
app.use(`/${process.env.API_ENDPOINT}/${process.env.API_VERSION}`, router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // console.log(req)
  // next(createError(404));

  const error = createError(404);

  // return res.status(error.statusCode).send({ data: null, error: { message: error.message, stack: error.stack }});
  return response.Errors(res, error.statusCode, `Route: ${error.message}`, [
    { detail: error.stack },
  ]);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');

  return response.Errors(res, err.status || 500, err.message, [
    { detail: err },
  ]);
});

module.exports = app;