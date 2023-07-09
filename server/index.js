require("dotenv").config();
const express = require("express");
const cors = require("cors");
const crudRoutes = require("./routes/crudRoutes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

//connect mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/Experiments", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

mongoose.connection.on("error", (err) => {
  console.log("DB connection error" + err.message);
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.use("/api/cruds", crudRoutes);
//app.use("/api/auth", authRoute);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
