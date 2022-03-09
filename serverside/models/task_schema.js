const { Schema, model} = require('mongoose')

const taskSchema = new Schema(
    {
        description:{
            type: String,
            required: [true, 'task description is required']
        },
        completed:{
            type: Boolean,
            default: false
            
        },
        todos:{
            type: Schema.Types.ObjectId,
            ref: 'Todo',
            

        }
    

    })

module.exports = model('Task', taskSchema)
