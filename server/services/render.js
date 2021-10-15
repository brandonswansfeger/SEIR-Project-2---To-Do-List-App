const axios=require('axios');


exports.homeRoutes = (req,res) => {

    axios.get('http://localhost:3000/api/tasks')
    .then(function(response){
       res.render('index',{tasks:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
   
}



exports.updateTask = (req,res) => {
    axios.get('http://localhost:3000/api/tasks',{params:{id:req.query.id}})
    .then(function(taskdata){
        res.render('updateTask',{task:taskdata.data});

    })
    .catch(err=>{
        res.send(err);
    })
}

