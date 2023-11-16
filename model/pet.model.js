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

    owner:  { type: Schema.Types.ObjectId, ref: 'Owner' }, // "65549e6bb0f25ba19ba1452d"

});

export const PetModel = model('Pet', petSchema);