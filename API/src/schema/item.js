const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'description is required']
  },
  group: {
    type: String,
    enum: ["work", "personal"],
    required: [true, 'Group is required']
  },
  category: {
    type: String,
    enum: ["quick task", "task", "project"]
  },
  estimatedTime: {
    type: String
  },
  status: {
    type: String,
    enum: ["completed", "not complete"]
  }
})

module.exports = itemSchema