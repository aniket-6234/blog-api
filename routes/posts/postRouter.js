const express = require("express");
const postRouter = express.Router();

//GET all post
postRouter.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "get all post",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//GET single post
postRouter.get("/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "get single post",
      });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

// POST a post
postRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "create post",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// UPDATE a post
postRouter.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "update post",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DELETE a post
postRouter.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "delete post",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = postRouter;
