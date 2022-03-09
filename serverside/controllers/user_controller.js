const User = require('../models/user_schema')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const getAllUsers = (req, res) =>{
    User.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No Users Found")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}


const getSingleUser = (req,res) => {
    User.findById(req.params.id).populate('habits')
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json(`User with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}


const register = (req, res) =>{
   let newUser = new User(req.body)
    //SAVE USER TO DB
    newUser.password = bcrypt.hashSync(req.body.password, 10)

    newUser.save((err,user) => {
        if(err){
            return res.status(400).send({
                message: err
            })
        }
        else{
            user.password = undefined
            return res.json(user)
        }
    })
}

const login = (req, res) =>{
   User.findOne({
       email: req.body.email
   })
   .then(user => {
       if( !user || !user.comparePassword(req.body.password)) {
        return res.status(401).json({
            message: 'Authentication failed. Invalid user or password'
        })
    }
    res.json({
        token: jwt.sign({
            email:user.email,
            full_name: user.full_name,
            _id: user._id
        }, 'login_example_app'),
        user
    })
})
   .catch(err =>{
       throw err
   })
}

const loginRequired = (req, res, next) => {
    if(req.user){
        next()
    }
    else{
        return res.status(401).json({
            message: 'Unauthorized user!!'
        })
    }
}

const deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id)
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
    register,
    login,
    loginRequired,
    getAllUsers,
    getSingleUser,
    deleteUser
}