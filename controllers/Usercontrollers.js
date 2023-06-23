const Users = require("../models/models");
const bcrypt = require("bcrypt");
const { createSecretToken } = require("../util/SecretToken");
class data {
  static async createUser(req, res, next) {
    try {
      const { email, password, name, createdAt, lastname, telephone } =
        req.body;
      console.log(req.body);
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return res.json({ message: "email existe déjà" });
      }
      const user = await Users.create({
        email,
        password,
        name,
        createdAt,
        lastname,
        telephone,
      });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.status(200).json({ message: "User Enregister", success: true, user });
      next();
    } catch (error) {
      console.error(error);
    }
  }
  // Connection
  static async Login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.json({ message: "Renseigner les deux champs svp" });
      }
      const user = await Users.findOne({ email });
      console.log("pqohsfpaihfdapzhidf", user);
      if (!user) {
        return res.json({ message: "Incorrect password or email" });
      }
      const auth = await bcrypt.compare(password, user.password);
      console.log(user.password);
      if (!auth) {
        return res.json({ message: "Incorrect password or email" });
      }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(200)
        .json({ message: "User logged in successfully", success: true });
      next();
    } catch (error) {
      console.error(error);
    }
  }

  static async getUsersByid(req, res) {
    try {
      const { id } = req.params;
      const Person = await Users.findById(id);
      console.log(Person);
      res.status(200).json(Person);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: message.error });
    }
  }
  static async getUsers(req, res) {
    try {
      const Person = await Users.find({});
      console.log(Person);
      res.status(200).json(Person);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: message.error });
    }
  }
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const Person = await Users.findByIdAndUpdate(id, req.body);
      if (!Person) {
        res
          .status(404)
          .json({ message: `peut pas modifier l'element qui a l'id ${id}` });
      }
      res.status(200).json(Person);
    } catch (error) {
      res.status(500).json({ message: message.error });
    }
  }
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const Person = await Users.findByIdAndDelete(id);
      if (!Person) {
        res
          .status(404)
          .json({ message: `L'element qui a lid ${id} existe pas` });
      }
      res.status(200).json(Person);
    } catch (error) {
      res.status(500).json({ message: message.error });
    }
  }
}

module.exports = data;
