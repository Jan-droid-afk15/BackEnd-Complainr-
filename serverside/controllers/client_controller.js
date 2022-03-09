const Client = require('../models/client_schema')

const getAllClients = (req, res) =>{
    Client.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No clients Found")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })
}

const getSingleClient = (req,res) => {
    Client.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json(`Client with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json("None Found")
    })


    }
    const addClient = (req, res) => {
        let clientData = req.body

        Client.create(clientData)
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
    
    }
module.exports = {
    getAllClients,
    getSingleClient,
    addClient
}