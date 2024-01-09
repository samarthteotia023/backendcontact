var jwt = require('jsonwebtoken');

const JWT_SECRET="qwert12345"
const JWT_EXPIRE="300000000000000000"
require('dotenv').config()
const generateJwtToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
  };
module.exports=generateJwtToken;