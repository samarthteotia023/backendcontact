const User = require("../models/user");
const generateJwtToken = require("../utils");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).json({
        message: "wrong credential",
      });
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated)
      return res.status(400).json({
        message: "Wrong credentials",
      });
    let token = generateJwtToken({ user });
    res.status(200).json({
      data: { token,user },
      message: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
const authRoute = {
  register,
  login,
};
module.exports = authRoute;