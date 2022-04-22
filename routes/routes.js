const express = require('express');
const router = express.Router();
const ItemModel = require('../models/itemModel.js')
const mongoose = require('mongoose');

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const items = await ItemModel.find({});
        res.send(items);

    } catch {
        res.status(404);
        res.send({ error: "Items not found" })
    }
});

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const item = await ItemModel.findOne({ id: parseInt(req.params.id) });
        res.send(item);

    } catch {
        res.status(404);
        res.send({ error: "Item doesnt exist" })
    }
});

module.exports = router;
