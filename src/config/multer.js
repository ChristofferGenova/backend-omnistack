/**
 * Biblioteca multer para enviar arquivos
 */
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp"),
  storage: multer.diskStorage({
    destination: (res, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "tmp"));
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, file.key);
      });
    }
  })
};
