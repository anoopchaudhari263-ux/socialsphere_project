const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: String,
  username: String,
  text: String,
  image: String,
  likes: [String],
  comments: [
    {
      user: String,
      text: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
