require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect('mongodb+srv://mahmoodna3n3:M02ysvvKd2XLdSiw@cluster0.zlvnvgh.mongodb.net/?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err = {
    if(err) {
      throw err
      console.log('Connected to MongoDB')
    }
  })
}

module.exports = connectDB