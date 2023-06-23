const express = require('express')
const router = express.Router()
const controllers = require("../controllers/vehiculeControllers")


router.get('/getVehicule', controllers.geVehicule)
router.post('/addVehicule', controllers.addVehicule)
router.put('/updateVehicule/:id', controllers.updateUser)
router.delete('/deleteVehicule/:id', controllers.geVehicule)

module.exports = router