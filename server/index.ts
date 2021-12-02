require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONGODB ,() => {
    console.log("Mongo DB has been connected");
})

app.listen(PORT, () => {
    console.log('Server started!');
})