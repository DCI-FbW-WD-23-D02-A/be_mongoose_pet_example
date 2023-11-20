import { Schema, model } from 'mongoose';

const petSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        default: 1,
    },
    kind: {
        type: String,
    },
    // owner: new Schema({
    //     name: String,
    //     address: String,
    // }),
    favoriteMovie: new Schema({
        name: String,
        year: String,
    }),

    owner:  { type: Schema.Types.ObjectId, ref: 'Owner' },
    food: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
});

export const PetModel = model('Pet', petSchema);