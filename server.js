require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// routes
const userRoute = require("./routes/userRoutes");
const commentRoute = require("./routes/commentRouters");
const blogRoute = require("./routes/blogRouter");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/comments", commentRoute);
app.use("/api/blogs", blogRoute);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.CONNECT_DB)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log("server running on", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
