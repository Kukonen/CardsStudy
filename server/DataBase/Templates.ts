const mongoose = require('mongoose');
import {Schema, Model} from 'mongoose';
import {ICards} from "../Interfaces/Cards";

const templateSchema = new Schema<ICards, Model<ICards>, ICards>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    authtor: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: false
    },
    //@ts-ignore
    cards: {
        type: Array,
        required: false
        // id: {
        //     type: String,
        //     required: true
        // },
        // title: {
        //     type: String,
        //     required: true
        // },
        // text: {
        //     type: String,
        //     required: true
        // },
        // type: {
        //     //@ts-ignore
        //     type: String,
        //     enum: ['block2' , 'block4' , 'text'],
        //     default: 'block2',
        //     required: true
        // },
        // content: {
        //
        // }
    },
    //@ts-ignore
    likes: {
        type: Array,
        required: false
    },
    //@ts-ignore
    comments: {
        type: Array,
        required: false
    },
    //@ts-ignore
    results: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Templates', templateSchema);