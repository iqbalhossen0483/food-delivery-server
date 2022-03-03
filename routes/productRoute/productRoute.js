const { postProduct, getProduct, getProductById, getCartProduct } = require("../../controller/product/product");
const imageUpload = require("../../cloudinary/upload/imageUpload");
const categoryRoute = require("./categoryRoute/categoryRoute");
const multer = require("../../multer/multer");
const express = require("express");


const productRoute = express.Router();

//category route
productRoute.use("/category", categoryRoute);

productRoute.post("/",
    multer.single("img"),
    imageUpload("food-delivary/product", 200, 300),
    postProduct
);


productRoute.get("/", getProduct);


//get cart product
productRoute.get("/cart", getCartProduct);

//product by id
productRoute.get("/:id", getProductById);



module.exports = productRoute;