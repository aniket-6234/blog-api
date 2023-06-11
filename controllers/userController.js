const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const getTokenFromHeader = require("../utils/getTokenFromHeader");

// Register
const userRegister = async (req, res) => {
  const { firstname, lastname, profilePhoto, email, password } = req.body;
  try {
    // check if email is exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.json({
        msg: "User is already exist.",
      });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create a new user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
    });
    res.json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.json(err.message);
  }
};

// Login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.json({
        msg: "Invalid login Credential",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (!isPasswordMatch) {
      return res.json({
        msg: "Invalid login credential",
      });
    }
    res.json({
      status: "success",
      data: {
        data: userFound,
        token: generateToken(userFound._id),
      },
    });
  } catch (err) {
    res.json(err.message);
  }
};

const getAllUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
    });
  } catch (err) {
    res.json(err.message);
  }
};

const getProfileData = async (req, res) => {
  const { id } = req.params;
  try {
    const token = getTokenFromHeader(req);
    console.log("token: ", token);
    const user = await User.findById(id);
    if (!user) {
      return res.json({
        msg: "User not found",
      });
    }
    res.json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.json(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
    });
  } catch (err) {
    res.json(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
    });
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  userRegister,
  userLogin,
  getAllUser,
  getProfileData,
  updateUser,
  deleteUser,
};
