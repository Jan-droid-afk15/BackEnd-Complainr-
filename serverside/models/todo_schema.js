const { Schema, model} = require('mongoose')

const todoSchema = new Schema(
    {
        title:{
            type: String,
            required: [true, 'ToDo title is required']
        },
       description:{
            type: String,
            
        },
        created_at:{
            type: Date
        },
        completed:{
            type: Boolean,
            default:false
           
        },
        tasks: {
            type: [Schema.Types.ObjectId],
            ref:'Task',

        },
  
    })

module.exports = model('Todo', todoSchema)
