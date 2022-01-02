const mongoose = require("mongoose");

const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    title: String,
    discription : String,
    image : String,
    initialPrice : Number,
    soldPrice:{
      type: Number,
      default:0
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
      }
    ],
    CreateAt: { 
      type: Date, 
      default: Date.now 
    },
    openAt: Date, 
    closeAt : Date
  })
);

module.exports = Item;