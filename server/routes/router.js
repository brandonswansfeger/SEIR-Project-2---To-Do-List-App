const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');



route.get('/',services.homeRoutes);

route.get('/updateTask',services.updateTask);


route.post('/api/tasks', controller.create)
route.get('/api/tasks', controller.find)
route.put('/api/tasks/:id', controller.update)
route.delete('/api/tasks/:id', controller.delete)


module.exports = route