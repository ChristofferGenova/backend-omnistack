const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");
const UserController = require("./controllers/UserController");

/**
 * Routes Box
 */
routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

/**
 * Routes File
 */
routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);

/**
 * Routes User
 */
routes.post("/user/create", UserController.store);
routes.get("/user/:id", UserController.show);

module.exports = routes;
