const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const app = express();
require("dotenv").config();
const orderRoutes = require('./routes/orderRoutes');

const PORT = process.env.PORT || 8092;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL ;

mongoose.connect(URL, {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb connection success!");
})

app.use('/api/orders', orderRoutes);



app.listen(PORT, () =>{
    console.log(`Server is up and running in port no : ${PORT}`);
})
