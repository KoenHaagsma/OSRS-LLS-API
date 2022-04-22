
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('item', ItemSchema, 'itemschemas');


