const Vehicule = require("./../models/vehicule");
class dataVehicule {
  static async addVehicule(req, res, next) {
    try {
      const { marque, place, statut } = req.body;
      const newVehicule = await Vehicule.create({ marque, place, statut });
      res
        .status(200)
        .json({ message: "enregister avec succes", succes: true, newVehicule });
    } catch (error) {
      console.error(error);
    }
  }

  static async geVehicule(req, res) {
    try {
      const allVehicule = await Vehicule.find({});
      console.log(allVehicule);
      res.status(200).json(allVehicule);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: message.error });
    }
  }
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateVehicule = await Vehicule.findByIdAndUpdate(id, req.body);
      if (!updateVehicule){
        res
          .status(404)
          .json({ message: `peut pas modifier l'element qui a l'id ${id}` });
      }
      res.status(200).json(updateVehicule);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async deleteVehicule(req, res) {
    try {
      const { id } = req.params;
      const vehiculeDelete = await Vehicule.findByIdAndDelete(id);
      if (!vehiculeDelete) {
        res
          .status(404)
          .json({ message: `L'element qui a lid ${id} existe pas` });
      }
      res.status(200).json(vehiculeDelete);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = dataVehicule;
