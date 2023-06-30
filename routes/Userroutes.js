const express = require('express')
const router = express.Router()
const Verification = require('../middlewares/UsersMiddlwares')
const controllers = require("../controllers/Usercontrollers")
// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*") 
//    });

router.post('/',Verification.userVerification)
router.get('/', controllers.getUsers)
router.post('/', controllers.createUser)
router.post('/Login', controllers.Login)
router.get('/:id', controllers.getUsersByid)
router.put('/:id', controllers.updateUser)
router.delete('/:id', controllers.deleteUser)


module.exports = router