const mongoose = require("mongoose");

const Tag = mongoose.model(
  "Tag",
  new mongoose.Schema({
    name: String,
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
      }
    ]
  })
);

module.exports = Tag;