const express = require('express');
const router = express.Router();
const Model = require('../models/imageModel.js');
const ItemModel = require('../models/itemModel.js')
const mongoose = require('mongoose');
const items = require('../osrs-data/items-complete.json')

//Post Method
router.post('/post', (req, res) => {
    res.send('Post route')
});

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('get All routes')
});

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API');
});

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const item = await ItemModel.findOne({ id: parseInt(req.params.id) })
        res.send(item);

    } catch {
        res.status(404);
        res.send({ error: "Item doesnt exist" })
    }
});

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API');
});

module.exports = router;
