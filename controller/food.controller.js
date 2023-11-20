import { Router } from "express";
import { FoodModel } from "../model/food.model.js";

const router = new Router();

router.get('/', async (req, res) => {
    const food = await FoodModel.find({});
    return res.send(food);
});

router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const food = await FoodModel.create(data);
        return res.send({
            message: 'Hinzugefügt',
            data: food,
        });
    } catch (error) {
        // if (error instanceof ValidationError) {}
        return res.status(400).send({
            error: error.message
        });
    }
});

export default router;