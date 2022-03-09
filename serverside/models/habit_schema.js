const { Schema, model} = require('mongoose')

const habitSchema = new Schema(
    {
        title:{
            type: String,
            required: [true, 'habit title is required']
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:'User',
            
        },
        duration:{
            type: String,
            
        },
        reminders:{
            type: Boolean,
            default:false
        },
        habit_frequency:{
            type: String,
            enum:["Daily", "Weekly", "Monthly"],
            
            default: "Daily"

        },
        significance:{
            type: String,
           
        },
        category: [{
            type: Schema.Types.ObjectId,
            ref:'Category'
            
            }],
    
        streak:{
            type: Number,
            
        },
        image_path:{
            type: String,
        },
        user_id: {
            type: Schema.Types.ObjectId
        }
    })



module.exports = model('Habit', habitSchema)
