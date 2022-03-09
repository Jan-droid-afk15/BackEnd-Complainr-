const Category = require('../models/category_schema')


const getAllCategories = (req, res) =>{
    Category.find({category_name: ''})
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No categories Found")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}

    const addCategories = (req, res) => {
        let categoryData = req.body

        Category.create(categoryData)
        .then((data) => {
            if(data){
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
        .catch((err)=>{
            if(err.name === "ValidationError"){
                res.status(422).json(err)
                
            }else{
                console.log(err)
                res.status(500).json(err)
            }
          
        })
    }
        

        const updateCategories = (req, res) => {
            let categoryData = req.body
    
            Category.findByIdAndUpdate(req.params.id, {$set: categoryData})
            .then((data) => {
                if(data){
                    res.status(201).json(data)
                }else{
                    res.status(404).json("Categories not updated.")
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

            const deleteCategories = (req, res) => {
                Category.findByIdAndRemove(req.params.id)
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
        getAllCategories,
        addCategories,
        deleteCategories,
        updateCategories
        }
    
 