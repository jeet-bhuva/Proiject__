const express = require('express')
const cors = require('cors')
const { DB } = require('./DB/dataBase')

// Routes
const User = require('./Routes/userRoutes')
const SigninUser = require('./Routes/userRoutes')
const Userposts = require('./Routes/userRoutes')
const Postupdate = require('./Routes/userRoutes')
const POstDelete = require('./Routes/userRoutes')

// Express
const app = express()

const PORT = process.env.PORT || 5000
app.use(cors());
app.use(express.json())

// Routes
app.use(User)
app.use(SigninUser)
app.use(Userposts)
app.use(Postupdate)
app.use(POstDelete)



app.listen(PORT,()=>{
    console.log("Server Running Successfully:",PORT)
})