const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  credits: Number
});

module.exports = mongoose.model("Course", CourseSchema);