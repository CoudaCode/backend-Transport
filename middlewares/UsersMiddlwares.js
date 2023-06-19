const Users = require("./../models/models");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false , value: token})
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await Users.findById(data.id)
      console.log(user)
      if (user) return res.json({ status: true, user: {name: user.name, lastname: user.lastname} })
      else return res.json({ status: false })
    }
  })
}