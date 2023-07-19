require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = () => {
mongoose.connect('mongodb+srv://Ecommerce:mahmood0100794@ecommerce.zxqtdef.mongodb.net/ecommerce?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})
}

module.exports = connectDB