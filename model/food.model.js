import { Schema, model } from 'mongoose';

const FoodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
});

export const FoodModel = model('Food', FoodSchema);