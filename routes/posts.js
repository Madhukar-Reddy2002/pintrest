const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pintrest");

const PostSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  image:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: []
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;