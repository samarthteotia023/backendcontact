const  {verify} =require( "jsonwebtoken");
const User = require("../models/user");
require('dotenv').config()
const verifyToken =
  async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return res.status(401).send({ message: "Unauthorized" });
    let bearer=token.split(" ");
    let decoded = await verify(bearer[1], process.env.JWT_SECRET)
    req.user=  decoded.user
    next();
  }
  const  verification={
    verifyToken
}
module.exports=verification