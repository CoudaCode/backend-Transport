const express = require('express')
const router = express.Router()
const Verification = require('../middlewares/UsersMiddlwares')
const controllers = require("../controllers/Usercontrollers")
// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*") 
//    });

router.post('/',Verification.userVerification)
router.get('/users', controllers.getUsers)
router.post('/addUser', controllers.createUser)
router.post('/Login', controllers.Login)
router.get('/users/:id', controllers.getUsersByid)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)


module.exports = router