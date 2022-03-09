const { Schema, model} = require('mongoose')

const habit_logSchema = new Schema(
    {
    user:{
        type: Schema.Types.ObjectId,
        ref:'User',
        
    },
    habit:{
        type: Schema.Types.ObjectId,
        ref:'Habit',
        
    },
    date:{
        type: Date,
        
    },
    completed:{
        type: Boolean,
        default:false
        
    },
 
},
    {
        timestamps: true
    })

  


module.exports = model('Habit_Log', habit_logSchema)

