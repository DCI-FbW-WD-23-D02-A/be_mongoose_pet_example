import { PetModel } from '../model/pet.model.js';
import { Router } from "express";

 const router = Router();

/**
 * Pet Liste
 */
 router.get('/', async (req, res) => {
    const pets = await PetModel.find({});
    return res.send(pets);
});

/**
 * Einzelnes Pet
 */
router.get('/:id', async (req, res) => {
    const params = req.params;
    const id = params.id;

    try {
        const pet = await PetModel.findById(id);
        return res.send(pet);
    } catch (err) {
        return res.status(404).send('Pet not found');
    }
})

/** Alle löschen */
router.delete('/all', async (req, res) => {
    try {
        const result = await PetModel.deleteMany({});  // { kind: 'bird' }
        console.log('gelöscht: ', result.deletedCount);
        res.send('Alle gelöscht');
    } catch (error) {
        res.send(error)
    }
});

/**
 * Einzelnes Pet löschen
 */
router.delete('/:id', async (req, res) => {
    const { params: { id } } = req;
    console.log('id', id);
    try {
        const result = await PetModel.findByIdAndDelete(id);
        console.log(result);
        if (result === null) {
            throw Error('Pet already gone');
        }
        return res.send('Deleted');
    } catch (error) {
        console.error(error);
        return res.status(404).send('Pet not found');
    }
});

/**
 * Einzelnes pet ändern
 */
router.patch('/:id', async (req, res) => {
    const { params: { id } } = req;
    // const data = req.body; <-- update daten
    try {
        //const pet = await PetModel.findByIdAndUpdate(id, { age: 50 });
        const pet = await PetModel.findById(id);
        if (pet === null) {
            throw Error('Pet not found');
        }

        console.log('age: ', pet.age);
        pet.age = 1000;
        console.log('new age: ', pet.age);


        await pet.save();

        return res.send({
                message: 'updated',
                data: pet
        });
    } catch (err) {
        return res.status(400).send('Error during update');
    }
});


/**
 * Pet erstellen
 */
 router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const pet = await PetModel.create(data);
        return res.send({
            message: 'Hinzugefügt',
            data: pet,
        });
    } catch (error) {
        // if (error instanceof ValidationError) {}
        return res.status(400).send({
            error: error.message
        });
    }
});

export default router;