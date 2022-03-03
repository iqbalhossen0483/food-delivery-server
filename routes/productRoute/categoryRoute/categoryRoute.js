const express = require("express");
const imageUpload = require("../../../cloudinary/upload/imageUpload");
const { postCategory, getCategory } = require("../../../controller/product/category/category");
const multer = require("../../../multer/multer");

const categoryRoute = express.Router();

categoryRoute.post("/",
    multer.single("img"),
    imageUpload("food-delivary/images", 200, 300),
    postCategory
);

categoryRoute.get("/", getCategory);

module.exports = categoryRoute;