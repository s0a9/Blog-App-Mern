require("dotenv").config();

const express = require("express");
const app = express();

// routes
const userRoute = require("./routes/userRoutes");
const commentRoute = require("./routes/commentRouters");
const blogRoute = require("./routes/blogRouter");

app.use(express.json());

app.use("/api/user", userRoute);
app.use("api/comments", commentRoute);
app.use("/api/blogs", blogRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Welcome to my blog app...");
});
