import { Router } from "express";
import { OwnerModel } from "../model/owner.model.js";

const router = new Router();

router.get('/', async (req, res) => {
    const owner = await OwnerModel.find({});
    return res.send(owner);
});

router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const owner = await OwnerModel.create(data);
        return res.send({
            message: 'Hinzugefügt',
            data: owner,
        });
    } catch (error) {
        // if (error instanceof ValidationError) {}
        return res.status(400).send({
            error: error.message
        });
    }
});

export default router;