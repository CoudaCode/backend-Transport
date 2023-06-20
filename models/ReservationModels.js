const mongoose = require('mongoose')

const modelsReservation = mongoose.Schema(
    {
    nom:{
      type: String,
      required: [true, "Your nom is required"],
    },
    prenom: {
      type: String,
      required: [true, "Your prenom is required"]
    },
    email: {
      type: String,
      required: [true, "Your email is required"],
      unique : true
    },
    telephone: {
      type: Number,
      required: [true, "Your number is required"]
    },
    villeDepart: {
      type: String,
      enum: ["Abidjan", "Bouaké", "bouaflé", "Odienne"],
      required: [true, "Your choisissez votre ville de depart"]
    },
    villeArrive: {
      type: String,
      enum: ["Abidjan", "Bouaké", "bouaflé", "Odienne"],
      required: [true, "Your choisissez votre ville d'arrive"]
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  }
)

const Reservation = mongoose.model('Reservation', modelsReservation)

module.exports = Reservation;