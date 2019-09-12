const mongoose = require("mongoose");

/**
 * Criação do schema do usuário
 */
const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", User);
