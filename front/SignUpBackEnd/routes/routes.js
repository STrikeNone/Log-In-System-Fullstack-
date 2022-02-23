const { request } = require("express");
const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

// Sign Up is a post request
router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const signedUpUser = new signUpTemplateCopy({
    userName: req.body.userName,
    email: req.body.email,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
