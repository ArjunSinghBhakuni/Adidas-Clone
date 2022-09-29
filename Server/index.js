const express = require("express");
const { connection } = require("./config/db");
 
const productController = require("./controller/productController");
const userController = require("./controller/userController");
 

const cors = require("cors");
const cartController = require("./controller/cartController");
const authentication = require("./middleware/authentication");
const singleProductController = require("./controller/singleProductController");
const clothDataController = require("./controller/clothDataController");
const ShoeController = require("./controller/shoeController");
require("dotenv").config();
const PORT=process.env.PORT
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("home");
});
 
 
app.use("/clothData",clothDataController)
app.use("/shoeData",ShoeController)
app.use("/user", userController);
 
app.use("/products", productController);
 
 
app.use("/cart",cartController)

app.listen(PORT, async() => {
  try{
      await connection;   
      console.log("connected to db successfully")
  }
  catch{
      console.log("something went wrong while connecting to db")
  }
  console.log(`Server listening on localhost:${PORT}`)
})