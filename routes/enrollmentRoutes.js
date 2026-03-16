const express = require("express");
const router = express.Router();
const Enrollment = require("../models/Enrollment");

router.post("/", async (req, res) => {

  const enroll = new Enrollment(req.body);

  await enroll.save();

  res.json(enroll);

});

router.get("/:studentId", async (req, res) => {

  const courses = await Enrollment.find({
    studentId: req.params.studentId
  });

  res.json(courses);

});

module.exports = router;