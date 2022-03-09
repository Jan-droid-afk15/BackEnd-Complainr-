const Task = require('../models/task_schema')
const Todo = require('../models/todo_schema')

const getAllTasks = (req, res) =>{
    Task.find().populate('todos')
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No tasks Found")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}


const addTasks = (req, res) => {
    let taskData = req.body

    Task.create(taskData)
    .then((data) => {
        if(data){
            Todo.findByIdAndUpdate({
                _id: data.todos
            }, {
                $push: {task: data._id}
            }, (error) => {
                if(error){
                    res.status(500).json(err)
                }
            })
            res.status(201).json(data)
        }
    })
    .catch((err)=>{
        if(err.name === "ValidationError"){
            res.status(422).json(err)
            
        }else{
            console.log(err)
            res.status(500).json(err)
        }
      
    })
}
    
        
        const updateTasks = (req, res) => {
            let taskData = req.body
    
            Task.findByIdAndUpdate(req.params.id, {$set: taskData})
            .then((data) => {
                if(data){
                    res.status(201).json(data)
                }else{
                    res.status(404).json("Tasks not updated.")
                }
            })
            .catch((err)=>{
                if(err.name === "ValidationError"){
                    res.status(422).json(err)
                    
                }else{
                    console.log(err)
                    res.status(500).json(err)
                }
              
            })
        }

        const deleteTasks = (req, res) => {
            Task.findByIdAndRemove(req.params.id)
                .then((data) => {
                  if(data){
                    res.status(200).json(data)
                     }else{
                      res.status(404).json(`Task with ID: ${req.params.id} not found`)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(500).json(err)
                })
            }

    module.exports = {
        getAllTasks,
        addTasks,
        updateTasks,
        deleteTasks
        }
    
