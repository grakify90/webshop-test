const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || "nqeoir209en0870cwjsue9h827";

function toJWT(data) {
  return jwt.sign(data, secretKey, { expiresIn: "2h" });
}

function toData(jwt) {
  return jwt.verify(jwt, secretKey);
}

module.exports = { toJWT, toData };
