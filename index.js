const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute/productRoute");
const userRouter = require("./routes/userRoute/userRouter");
const orderProcessRouter = require("./routes/others/orderProcessRouter");
const orderRoute = require("./routes/oderRoute/orderRoute");

//middleware
const app = express();
app.use(express.json());
app.use(cors());
//port
const port = process.env.PORT || 5000;


//product route
app.use("/products", productRoute);

//user route
app.use("/users", userRouter);

//order process derection route
app.use("/orderProcess", orderProcessRouter);

//order route
app.use("/orders", orderRoute);


//initial route
app.get("/", (req, res) => {
    res.send("The server is runing");
});



//default err handler
app.use((err, req, res, next) => {
    if (err) {
        res.status(err.status || 500).json({message: err.message || "There was a serverside error"});
        console.log(err);
    }
})
//app listener
app.listen(port, () => {
    console.log("It's running on", port);
});
