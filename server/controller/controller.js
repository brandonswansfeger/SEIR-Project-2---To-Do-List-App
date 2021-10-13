var Taskdb = require('../models/model');


//create and save new task

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }

    // new task
    const task = new Taskdb({
        case: req.body.case,
        task: req.body.task,
        notes: req.body.notes,
        deadline: req.body.deadline
    })

    // save task

    task
        .save(task)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            })
        })
}

//retrieve and return all tasks

exports.find = (req, res) => {
    Taskdb.find()
        .then(task => {
            res.send(task)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving task information"
            })
        })

}

// Update a new task by id

exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({
                message: "Data to update cannot be empty"
            });
    }
}

// const id = req.params.id

Taskdb.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false
    })
    .then(data => {
            if (!data) {
                res.status(404).send({message:err.message||"Cannot update task with ${id} Task not found"});
     }
    
      else{
         res.send(data);
        }
    })

exports.delete = (req,res) => {}