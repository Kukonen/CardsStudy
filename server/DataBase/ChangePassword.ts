const mongoose = require('mongoose');
import { Schema, Model } from 'mongoose';

export interface IChangePassword {
    id: string;
    userId: string;
    password: string;
    path: string;
    date: number;
}

const changePasswordSchema = new Schema<IChangePassword, Model<IChangePassword>, IChangePassword>({
    id: {
        type: String,
        required: false,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('ChangePassowrd', changePasswordSchema);