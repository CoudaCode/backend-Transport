const Reservation = require('./../models/ReservationModels')

class reservaTionData {
      static async createReservation(req, res, next){
          try {
          const { email, villeDepart,villeArrive , nom, createdAt, prenom ,datVoyage,heureVoyage, telephone } = req.body;
          const existingUser = await Reservation.findOne({ email });
          if (existingUser || villeArrive == villeDepart){
            return res.json({ message: "email existe déjà ou la ville de depart est pareil que celle d'arrivé" });
         }
         
         const reserve = await Reservation.create({ email, villeDepart,villeArrive , nom, datVoyage,heureVoyage, createdAt, prenom , telephone });
         res
         .status(200)
         .json({ message: "Reservation Validé", success: true, reserve });
          next();
          } catch (error){
            console.log("erroeeeeee",error)
          }
      }
      static async getReservation(req, res){
        try {
          const Allreserve = await Reservation.find({})
          console.log(Allreserve)
          res.status(200).json(Allreserve)
        } catch (error) {
          console.log(error.message)
          res.status(500).json({message: error.message})
        }
     }
     static async Destination(req, res){
      try {
        const AllreserveALL = await Reservation.schema.path('villeDepart')
        const AllreserveREt = await Reservation.schema.path('villeDepart')
        console.log(AllreserveALL.enumValues)
        res.status(200).json([AllreserveALL.enumValues,AllreserveREt.enumValues])
      } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
      }
   }

} 

module.exports = reservaTionData