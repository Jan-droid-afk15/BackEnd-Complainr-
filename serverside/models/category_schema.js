const { Schema, model} = require('mongoose')

const categorySchema = new Schema(
    {
      
        category_name:{
            type: String,
        },

    
    })

module.exports = model('Category', categorySchema)
