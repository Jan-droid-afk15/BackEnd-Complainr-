const Habit = require('../models/habit_schema')
const User = require('../models/user_schema')


///// get habit by users id 
///// or get from users table
///// dont use populate
///// if getting from users put data.habits to print out just the habits
const getAllHabits = (req, res) =>{
    Habit.find().populate('user')
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No Habits Found")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}

/// this is fine
const getSingleHabit = (req,res) => {
    Habit.findById(req.params.id)
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


//// first create new habit 
//// save the newly added habit in users table
//// passing in user id to make sure the habit is only saved in that user
const addHabit = (req, res) => {

    const habit = new Habit()
    habit.title = req.body.title,
    habit.duration = req.body.duration,
    habit.reminders = req.body.reminders ?  req.body.reminders : false,
    habit.habit_frequency = req.body.habit_frequency,
    habit.significance = req.body.significance,
    habit.category = req.body.category,
    habit.streak = req.body.streak,
    habit.user_id = req.body.userId

    habit.save()
    .then((data) => {
        User.findById(req.params.userId, (err,users) => {

            if(users) {
                users.habits.push(habit)
                users.save()
                res.status(201).json(data)            
            }
        })
    }).catch((err) => {
        console.error(err)
        res.status(500).json("Unsucccesful")
    })
}
    

const updateHabit = (req, res) => {
    let habitData = req.body

    Habit.findByIdAndUpdate(req.params.id, {$set: habitData})
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

const deleteHabit = (req, res) => {
    Habit.findByIdAndRemove(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json(`Category with ID: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json(err)
        
    })
}
        

module.exports = {
    getAllHabits,
    getSingleHabit,
    addHabit,
    updateHabit,
    deleteHabit
}
    
