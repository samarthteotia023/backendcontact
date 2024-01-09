var jwt = require('jsonwebtoken');
require('dotenv').config()
const generateJwtToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
module.exports=generateJwtToken;