// create tables
const express = require("express");
const tableRouter = express.Router();

const { createTable ,} = require("../controller/createTable");

tableRouter.get("/create", createTable);
// tableRouter.get("/delete", deleteTables);

module.exports = tableRouter;
