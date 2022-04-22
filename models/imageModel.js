const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number,
    },
    name: {
        type: String,
    },
    last_updated: {
        type: String,
    },
    incomplete: {
        type: Boolean,
    }, 
    members: {
        type: Boolean,
    },
    tradeable: {
        type: Boolean,
    },
    tradeable_on_ge: {
        type: Boolean,
    },
    stackable: {
        type: Boolean,
    },
    stacked: {
        type: String,
    },
    noted: {
        type: Boolean,
    },
    noteable: {
        type: Boolean,
    },
    linked_id_item: {
        type: String,
    },
    linked_id_noted: {
        type: String,
    },
    linked_id_placeholder: {
        type: String,
    },
    placeholder: {
        type: Boolean,
    },
    equipable: {
        type: Boolean,
    },
    equipable_by_player: {
        type: Boolean,
    },
    equipable_weapon: {
        type: Boolean,
    },
    cost: {
        type: Number,
    },
    lowalch: {
        type: Number,
    },
    highalch: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    buy_limit: {
        type: Number,
    },
    quest_item: {
        type: Boolean,
    },
    release_date: {
        type: String,
    },
    duplicate: {
        type: Boolean,
    },
    examine: {
        type: String,
    },
    icon: {
        type: String,
    },
    wiki_name: {
        type: String,
    },
    wiki_url: {
        type: String,
    },
    equipment: {
        type: Boolean,
    },
    weapon: {
        type: Boolean,
    },
    
});

module.exports = mongoose.model('itemSchema', itemSchema);
