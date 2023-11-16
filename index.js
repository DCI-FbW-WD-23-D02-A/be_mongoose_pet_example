import express from 'express';
import { mongoConnect } from './database.js';
import { config } from 'dotenv';
import cors from 'cors';

import PetController from './controller/pet.controller.js';
import OwnerController from './controller/owner.controller.js';

config();
mongoConnect();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(400).send('Hallo Welt')
});


app.use('/pet', PetController);
app.use('/owner', OwnerController);


const PORT = 4000;
app.listen(PORT, () => {
    console.info('Server gestartet http://localhost:'+PORT);
});