const express = require("express");
const { postUser, getUser, updateCart } = require("../../controller/user/user");
const varifyUser = require("../../middleware/varifyUser");

const userRouter = express.Router();

userRouter.post("/:email", postUser);

userRouter.get("/:email", varifyUser, getUser);

userRouter.put("/:email", updateCart);


module.exports = userRouter;