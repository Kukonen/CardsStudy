const mongoose = require('mongoose');
import { Schema, Model } from 'mongoose';
import {ICards} from "../Interfaces/Cards";

const changePasswordSchema = new Schema<ICards, Model<ICards>, ICards>({
    authtor: undefined,
    id: {
        type: String,
        required: false,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    cards: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        type: {
            type: String;
            enum: ['blocks2' , 'blocks4' , 'text'],
            default: 'block2',
            required: true
        },
        content: {

        }
    },
    likes: {
        type: Array,
        required: true
    },
    comments: {
        type: Number,
        required: true
    },
    results: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cards', changePasswordSchema);