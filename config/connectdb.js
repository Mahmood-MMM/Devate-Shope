require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect("mongodb+srv://mahmoodna3n3:bYW1NTvQ45KCXbmy@cluster0.fs0subm.mongodb.net/?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((data) => {
    console.log(`mongod connected with server: ${data.connection.host}`);
  });
}

module.exports = connectDB