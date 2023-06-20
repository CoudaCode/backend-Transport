const express = require('express')
const router = express.Router()
const Reversation = require("../controllers/ReversationControllers")
// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*") 
//    });

router.get('/getUser', Reversation.getReservation)
router.get('/ville', Reversation.Destination)
router.post('/addReservation', Reversation.createReservation)

module.exports = router