const express = require('express');
const router = express.Router();
const Model = require('../models/imageModel.js');

//Post Method
router.post('/post', (req, res) => {
    res.send('Post API');
});

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API');
});

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API');
});

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id);
});

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API');
});

module.exports = router;
