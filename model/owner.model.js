import { Schema, model } from 'mongoose';

const OwnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: String,
    city: String,
});

export const OwnerModel = model('Owner', OwnerSchema);