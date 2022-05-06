const express = require('express');
const router = express.Router();
const ItemModel = require('../models/itemModel.js');
const mongoose = require('mongoose');

// getAll method to get all items, limited to 1000 per page
router.get('/getAll', async (req, res) => {
    try {
        const pageNumber = req.query.page || 1;
        const skipNumber = req.query.skip || 0;
        const limitNumber = req.query.limit || 1000;
        let limit;
        let page;
        let skip;
        !isNaN(pageNumber)
            ? (page = parseInt(pageNumber))
            : res.send({ error: 'The page number search query is not correct, you might wanna take a look there' });

        !isNaN(skipNumber)
            ? (skip = parseInt(skipNumber))
            : res.send({ error: 'The skip number search query is not correct, you might wanna take a look there' });

        if (!isNaN(limitNumber)) {
            limit = parseInt(limitNumber);
            if (limit > 1000) {
                limit = 1000;
            }
        } else {
            res.send({ error: 'The limit number search query is not correct, you might wanna take a look there' });
        }

        const items = await ItemModel.find()
            .limit(limit)
            .skip((page - 1) * 1000);

        const newItems = {
            page: page,
            time: new Date(),
            ...items,
        };
        res.send(newItems);
    } catch {
        res.status(404);
        res.send({ error: 'Items not found' });
    }
});

//Get by ID Method, get's one item based on the id
router.get('/getOne/:id', async (req, res) => {
    try {
        if (!isNaN(req.params.id)) {
            const item = await ItemModel.findOne({ id: parseInt(req.params.id) });
            if (item === null) {
                res.status(404);
                res.send({
                    error: `The Item you were looking for was '${parseInt(req.params.id)}', it was not found`,
                });
            }
            res.send(item);
        } else {
            const item = await ItemModel.findOne({ name: req.params.id });
            if (item === null) {
                res.status(404);
                res.send({ error: `The Item you were looking for was '${req.params.id}', it was not found` });
            }
            res.send(item);
        }
    } catch {
        res.status(404);
        res.send({ error: `The Item you were looking for doesn't exist` });
    }
});

module.exports = router;
