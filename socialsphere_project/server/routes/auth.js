const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  const saved = await newUser.save();
  res.json(saved);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json("User not found");

  if (user.password !== req.body.password)
    return res.status(400).json("Wrong password");

  res.json(user);
});

module.exports = router;
