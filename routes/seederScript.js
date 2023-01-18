require("dotenv").config();

const productData = require('../models/product')
const connectDB = require('../config/connectdb')
const Product = require('./productRouter')

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.log("Error with data import");
    process.exit(1);
  }
};

importData()