const express = require('express')
const router = express.Router()
const Reversation = require("../controllers/ReversationControllers")
// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*") 
//    });

router.get('/', Reversation.getReservation)
router.get('/ville', Reversation.Destination)
router.post('/', Reversation.createReservation)

module.exports = router