const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Post Title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Post Description is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Post Category is required"],
  },
  numViews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  disLikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Author is required"],
  },
  photo: {
    type: String,
    required: [true, "Photo is required"],
  }
}, {
    timestamps: true
});


const Post = mongoose.model("Post", postSchema);
module.exports = Post;
