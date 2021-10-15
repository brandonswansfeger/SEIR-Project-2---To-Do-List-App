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
        priority: req.body.priority,
        matter: req.body.case,
        task: req.body.task,
        notes: req.body.notes,
        deadline: req.body.deadline
    });

    // save task

    task
        .save(task)
        .then(data => {
            res.send(data);
            // res.redirect('/updatetask')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });
}

//retrieve and return all tasks

exports.find = (req, res) => {
  
  if(req.query.id){
    const id=req.query.id;


    Taskdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not found with id"});
        }else{
            res.send(data)
        }
        })
        .catch(err=>{
          res.status(500).send({message: "error"})
    })
  
    
    }else{
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
}

exports.update=(req,res)=>{
    if(!req.body) {
        return res
        .status(400
        .send({message:"Data update cannot be empty"}))
    }
    
const id = req.params.id;
Taskdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
.then(data=>{
    if(!data){
        res.status(404).send({message:"Cannot find task"})
    }else{
        res.send(data)
    }
    })
    .catch(err=>{
        res.status(500).send({message: "Error update task"})
    })
 }



exports.delete=(req,res)=>{
    const id=req.params.id;

    Taskdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: "Cannot delete Task"});
        }else{
            res.send({message: "Task was deleted successfully"})
            }
    })
    .catch(err=>{
        res.status(500).send({message:"Could not delete task"})
    })
}
