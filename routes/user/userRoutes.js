const express = require("express");
const {
  userRegister,
  userLogin,
  getAllUser,
  getProfileData,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");
const isLogin = require("../../middlewares/isLogin");
const userRouter = express.Router();

userRouter.post("/register", userRegister);

userRouter.post("/login", userLogin);

userRouter.get("/", getAllUser);

userRouter.get("/profile", isLogin, getProfileData);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
