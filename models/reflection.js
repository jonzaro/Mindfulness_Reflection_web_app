const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reflectionSchema = new Schema({
  
  description: {
    type: String
  },
  
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Reflection", reflectionSchema)