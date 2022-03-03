const express = require("express");
const { postOrder, getOrder, getOrderByEmail } = require("../../controller/order.js/order");
const varifyUser = require("../../middleware/varifyUser");


const orderRoute = express.Router();

orderRoute.post("/", postOrder);

orderRoute.get("/", varifyUser, getOrder);

orderRoute.get("/:email", varifyUser, getOrderByEmail);

module.exports = orderRoute;