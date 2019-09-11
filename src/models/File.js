const mongoose = require("mongoose");

/**
 * Criação do schema File
 */
const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

/**
 * Criação do campo virtual
 */
File.virtual("url").get(function() {
  return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);
