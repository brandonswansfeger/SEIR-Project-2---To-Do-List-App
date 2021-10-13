const mongoose = require('mongoose');

let schema = new mongoose.Schema({
case:{
    type: String,
    required: false
},
task: {
    type: String,
required: true
},
Notes: {
    type: String,
    required: false
},
Deadline: {
    type: String,
}

})

const Taskdb = mongoose.model('taskdb',schema);

module.exports=Taskdb;