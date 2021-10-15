const mongoose = require('mongoose');

let schema = new mongoose.Schema({

    priority: String,
    matter: String,
    task: String,
    notes: String,
    deadline: String,
});

const Taskdb = mongoose.model('Taskdb',schema);

module.exports=Taskdb;