const User = require("../models/User");

class UserController {
  /**
   * Criação do usuário
   */
  async store(req, res) {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    return res.json(user);
  }

  async show(req, res) {
    const user = await User.findById(req.params.id);

    return res.json(user);
  }
}

module.exports = new UserController();
