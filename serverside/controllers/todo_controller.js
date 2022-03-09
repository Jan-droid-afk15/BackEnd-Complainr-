const Todo = require('../models/todo_schema')


const getAllTodos = (req, res) =>{
    Todo.find().populate('tasks')
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No clients Found")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}

const getSingleTodo = (req, res) => {
    Todo.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json(`Todo with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}


const addTodos = (req, res) => {
    let todoData = req.body

    Todo.create(todoData)
    .then((data) => {
        if(data){
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

const updateTodos = (req, res) => {
    let todoData = req.body

    Todo.findByIdAndUpdate(req.params.id, {$set: todoData})
    .then((data) => {
        if(data){
            res.status(201).json(data)
        }else{
            res.status(404).json("To Do lists not updated.")
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

const deleteTodos = (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json(`To Do list with ID: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json(err)
        
    })
}

module.exports = {
    getAllTodos,
    getSingleTodo,
    addTodos,
    updateTodos,
    deleteTodos
}

