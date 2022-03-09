const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()
require('./db')()


//import

const { getAllClients, getSingleClient, addClient } = require('./controllers/client_controller')
const { register, login, loginRequired, getAllUsers, getSingleUser,deleteUser } = require('./controllers/user_controller')
const { getAllHabits, getSingleHabit, addHabit, updateHabit, deleteHabit} = require('./controllers/habit_controller')
const { getAllHabit_Logs, getSingleHabit_Log, addHabit_Logs, updateHabit_Logs, deleteHabit_Logs } = require('./controllers/habit_log_controller')
const { getAllTasks, addTasks, updateTasks, deleteTasks } = require('./controllers/task_controller')
const { getAllCategories, addCategories, updateCategories, deleteCategories} = require('./controllers/category_controller')
const { getAllTodos, getSingleTodo, addTodos, updateTodos, deleteTodos } = require('./controllers/todo_controller')

const port = process.env.PORT || 3000


const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res , next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
        jwt.verify(req.headers.authorization.split(' ')[1], 'login_example_app', (err, decode) => {
            if (err) req.user = undefined
            req.user = decode
            next()
        })
    }
    else{
        req.user = undefined
        next()
    }
})

////////////////////




///////////////ROUTES///////////////
app.get('/client', getAllClients)
app.get('/client/:id',loginRequired, getSingleClient)
app.post('/client', addClient)
///////////////////////////////////

//USER ROUTES
app.post('/register', register)
app.post('/login', login)
app.get('/user', getAllUsers)
app.get('/user/:id/habit', loginRequired, getSingleUser)
app.delete('/user/:id', deleteUser)

////////////////////////////////////////

//HABIT ROUTES
app.get('/habit', loginRequired, getAllHabits)
app.get('/habit/:id', loginRequired, getSingleHabit)
app.post('/habit',loginRequired, addHabit)
app.put('/habit/edit/:id', loginRequired, updateHabit)
app.delete('/habit/:id', deleteHabit)

app.get('/habit_log', getAllHabit_Logs)
app.get('/habit_log/:id', loginRequired, getSingleHabit_Log)
app.post('/habit_log',loginRequired, addHabit_Logs)
app.put('/habit_log/edit/:id',loginRequired, updateHabit_Logs)
app.delete('/habit_log/:id', deleteHabit_Logs)

////////////////////////////////////////

//TASK ROUTES
app.get('/task', getAllTasks)
app.post('/task', addTasks)

app.put('/task/edit/:id', updateTasks)
app.delete('/task/:id', deleteTasks)
////////////////////////////////////////

//TODO ROUTES
app.get('/todo', getAllTodos)
app.get('/todo/:id', getSingleTodo)
app.post('/todo', addTodos)

app.put('/todo/edit/:id', updateTodos)
app.delete('/todo/:id', deleteTodos)

////////////////////////////////////////

//CATEGORY ROUTES
app.get('/category', getAllCategories)
app.post('/category', addCategories)

app.put('/category/edit/:id', updateCategories)
app.delete('/category/:id', deleteCategories)

////////////////////////////////////////




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})