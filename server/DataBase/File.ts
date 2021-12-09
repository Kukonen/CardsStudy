const mongoose = require('mongoose');
import { Schema, Model } from 'mongoose';

export interface IFile {
    id: string;
    userId: string;
    path: string;
    date: string;
    type?:string;
}

const filesSchema = new Schema<IFile, Model<IFile>, IFile>({
    id: {
        type: String,
        required: false,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Files', filesSchema);