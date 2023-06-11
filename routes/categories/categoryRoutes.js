const express = require("express");
const categoryRouter = express.Router();

categoryRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "category post",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

categoryRouter.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "get single categories",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "delete categories",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

categoryRouter.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "update categories",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = categoryRouter;
