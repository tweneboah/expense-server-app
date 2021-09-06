const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const userRoute = require("./routes/users/usersRoute");

const app = express();
//env
dotenv.config();
//dbConnect
dbConnect();

//middlewares
app.use(express.json());

//routes
app.use("/api/users", userRoute);

//Error
app.use(notFound);
app.use(errorHandler);

//income
//expenses

module.exports = app;
