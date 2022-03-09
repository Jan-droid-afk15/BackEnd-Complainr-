const Habit = require('../models/habit_schema')
const User = require('../models/user_schema')

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

const addHabit = (req, res) => {
    let habitData = req.body
    Habit.create(habitData)
    .then((data) => {
        if(data){
            User.findByIdAndUpdate({_id: req.params.userId
            }, {
                $push: {habits: habitData}
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
            // const habit = new Habit(
        //     {
        //       title: req.body.title,
        //       duration: req.body.duration,
        //       reminders: req.body.reminders ?  req.body.reminders : false,
        //       habit_frequency: req.body.habit_frequency,
        //       significance: req.body.significance,
        //       category: req.body.category,
        //       streak: req.body.streak
        // });
        
        // habit.save(habit)
            // /user.findbyid(userId, (users)) => {
            //         if(users){
            //             users.habits.push(habit)
            //             users.save()
            //             res.json
            //         }
            
            // }
    

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
    
