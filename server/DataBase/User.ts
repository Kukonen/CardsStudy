const mongoose = require('mongoose');
import { Schema, Model } from 'mongoose';

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    accessToken: string;
    refreshToken: string;
}

const usersSchema = new Schema<IUser, Model<IUser>, IUser>({
    id: {
        type: String,
        required: false,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    },
    accessToken: {
        type: String,
        require: true
    },
    refreshToken: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Users', usersSchema);