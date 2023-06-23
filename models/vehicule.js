const mongoose = require("mongoose");

const vehiculeSchema = mongoose.Schema({
  reference: {
    type: mongoose.Schema.Types.ObjectId,
  },
  marque: {
    type: String,
    required: true,
  },
  statut: {
    type: String,
    required: true,
    enum: ["active", "non Active"],
    default : 'non Active'
  },
  place: {
    type: Number,
    required: true,
  },
});

const vehicule = mongoose.model("vehicule", vehiculeSchema);

module.exports = vehicule;
