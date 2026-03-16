const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/register", async (req, res) => {

  try {

    const student = new Student(req.body);

    await student.save();

    res.json(student);

  } catch (err) {

    res.status(500).send(err);

  }

});

router.post("/login", async (req, res) => {

  const student = await Student.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (student) {

    res.json(student);

  } else {

    res.status(401).send("Invalid Login");

  }

});

module.exports = router;