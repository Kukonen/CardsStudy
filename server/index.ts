require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static('static'));


// routes
import authRoute from './Routers/auth.router';
import profileRoute from './Routers/profile.router';
import cardsRoute from "./Routers/cards.router";

app.use('/auth', authRoute);
app.use('/profile', profileRoute);
app.use('/cards', cardsRoute);

const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONGODB ,() => {
    console.log("Mongo DB has been connected");
})

app.listen(PORT, () => {
    console.log('Server started!');
})