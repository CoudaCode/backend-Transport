const mongoose = require('mongoose')

const modelsReservation = mongoose.Schema(
    {
    nom:{
      type: String,
      required: [true, "Champ nom est obligatoire"],
    },
    prenom: {
      type: String,
      required: [true, "Champ prenom est obligatoire"]
    },
    email: {
      type: String,
      required: [true, "Champ email est obligatoire"],
      unique : true
    },
    telephone: {
      type: Number,
      required: [true, "Champ telephone est obligatoire"]
    },
    villeDepart: {
      type: String,
      enum: ["Abidjan", "Bouaké", "bouaflé", "Odienne"],
      required: [true, "choisissez votre ville de depart"]
    },
    villeArrive: {
      type: String,
      enum: ["Abidjan", "Bouaké", "bouaflé", "Odienne"],
      required: [true, "choisissez votre ville d'arrive"]
    },
    heureVoyage:{
      type: String,
      require: true
    },
    datVoyage:{
      type:String,
      require: true
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  }
)

const Reservation = mongoose.model('Reservation', modelsReservation)

module.exports = Reservation;