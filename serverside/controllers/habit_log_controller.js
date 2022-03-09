const Habit_Log = require('../models/habit_log_schema')

const getAllHabit_Logs = (req, res) =>{
    Habit_Log.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No habits Found")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}

    const getSingleHabit_Log = (req,res) => {
        Habit_Log.findById(req.params.id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            }
            else{
                res.status(404).json(`Habit with id: ${req.params.id} not found`)
            }
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json("None Found")
        })
    }

    const addHabit_Logs = (req, res) => {
        let habit_logData = req.body

        Habit_Log.create(habit_logData)
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
    const updateHabit_Logs = (req, res) => {
        let habit_logData = req.body

        Habit_Log.findByIdAndUpdate(req.params.id, {$set: habit_logData})
        .then((data) => {
            if(data){
                res.status(201).json(data)
            }else{
                res.status(404).json("Habits not updated.")
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

        const deleteHabit_Logs = (req, res) => {
            Habit_Log.findByIdAndRemove(req.params.id)
            .then((data) => {
                if(data){
                    res.status(200).json(data)
                }else{
                    res.status(404).json(`Habit Log with ID: ${req.params.id} not found`)
                }
            })
            .catch((err)=>{
                console.log(err)
                res.status(500).json(err)
                
            })
        }

module.exports = {
    getAllHabit_Logs,
    getSingleHabit_Log,
    addHabit_Logs,
    updateHabit_Logs,
    deleteHabit_Logs
}