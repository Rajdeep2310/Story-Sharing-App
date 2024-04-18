const mongoose = require("mongoose");
const User = require("./User");

const storySchema = new mongoose.Schema({
  bookmark: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  slides: [
    {
      heading: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      like: {
        type: Number,
        default: 0,
      },
      category: {
        type: String,
        required: true,
        set: (value) => value.trim(),
      },
    },
  ],
},{timestamps:true});

const Story = mongoose.model("Story", storySchema);
module.exports = Story; 
