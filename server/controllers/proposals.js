const mongoose = require('mongoose');
const Proposals = require('../models/proposals');

function createProposal(data) {
    const newProposal = new Proposal({
        _id: new mongoose.Types.ObjectId(),
        item: data.item,
        qty: data.qty,
        price: data.price,
        desc: data.desc
    });
    const creation = newProposal.save().then((data, err) => {
        if (err) return console.log(err)
        return data;
    })
    return creation;
}

// Update an existing product
function updateProposal(data) {
    console.log(`Updating ${data.prev} to ${data.item}`)
    const update = Proposal.findOneAndUpdate({ item: data.prev }, { item: data.item, qty: data.qty, price: data.price, desc: data.desc })
    .then((data, e) => {
        if(e) return console.log('error', e)
        return data
    })
    return update;
}

// Decides whether or not to create or update
exports.process = function(req, res, next) {
    const item = req.body.prev || req.body.item;

    const hasItem = Proposal.findOne({ item }).then((data, err) => {
        if(err) return console.log(err)
        if(data) { 
            return updateProposal(req.body) // Returns the actual updated document
            // return { msg: `Updating ${req.body.item}` } // a convenient line for development that returns the name of the item to the client
        } else {
            return createProposal(req.body) // Returns the created document
            // return { msg: `Creating ${req.body.item}` }; // a convenient line for development that returns the item's name
        } 
    });
    return hasItem;
}


// Delete product from database
exports.delete = function(req, res, next) {
    console.log('Deleting an entry!');
}

// Reads out all products
exports.readProposal= () => {
    const list = Proposal.find({}).then((data, e) => {
        if(e) return console.log('error', e)
        return data;
    })
    return list;
}