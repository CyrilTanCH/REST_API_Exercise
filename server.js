require("dotenv").config(); // need this for the MongoDB server, which will contain passwords in a secure file (not published on github)
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json()); // log response in our console

// Routes
app.use("/api/students", require("./src/route/school"));
app.use("/api/teachers", require("./src/route/school"));

// Connecting to the Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Listening on port ${process.env.PORT} and connected to MongoDB`
      );
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message);
  });
