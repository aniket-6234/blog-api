const express = require("express");
const userRouter = require("./routes/user/userRoutes");
const postRouter = require("./routes/posts/postRouter");
const categoryRouter = require("./routes/categories/categoryRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
require("dotenv").config();
require("./config/dbConnect");

const app = express();

// middleware
app.use(express.json()); // parse incoming payload

// routes
//------ user routes ------
app.use("/api/v1/users", userRouter);

//------ post routes ------
app.use("/api/v1/posts", postRouter);

//------ category routes ------
app.use("/api/v1/categories", categoryRouter);

//------ comment routes ------
app.use("/api/v1/comments", commentRouter);

// error handlers middleware
// listen to server

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
