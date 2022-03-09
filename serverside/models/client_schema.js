const { Schema, model} = require('mongoose')

const clientSchema = new Schema(
    {
    name:{
        type: String,
        required: [true, 'name is required']
    },
    age:{
        type: Number,
        
    },
    email:{
        type: String,
        required: [true, 'email is required']
    },
    password:{
        type: Number,
        
    },
    password:{
        type: String,
        required: [true, 'password is required']
    }
    })

module.exports = model('Client', clientSchema)

