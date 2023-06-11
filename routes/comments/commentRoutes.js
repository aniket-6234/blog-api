const express = require("express");
const commentRouter = express.Router();

commentRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment post",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

commentRouter.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "get single comment",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});
commentRouter.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "delete comment",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});
commentRouter.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "update comment",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = commentRouter;
