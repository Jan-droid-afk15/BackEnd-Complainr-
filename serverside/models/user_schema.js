const { Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema(
    {
    full_name:{
        type: String,
        trim: true,
        required: [true, 'name is required']
    },
    
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, 'email is required']
    },
    password:{
        type: String,
        required: [true, 'password is required']
    },
    toDoLists:{
        type: [Schema.Types.ObjectId],
        ref:'Todo',

    },
    habits: {
        type: [Schema.Types.ObjectId],
        ref:'Habit',
    },
},
    {
        timestamps: true
    })

    userSchema.methods.comparePassword = function(password){
        return bcrypt.compareSync(password, this.password, function(result) {
            return result
    })
}

module.exports = model('User', userSchema)

