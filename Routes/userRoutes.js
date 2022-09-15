const express = require('express')
const routes = express.Router()
const {createUser,usersignin} = require("../Controller/userController")
const {userpost,userPostUpdate,userPostDelete} = require("../Controller/userPostController")

// Create User
routes.post("/create",createUser)
routes.post("/usersignin",usersignin)
routes.post("/userpost",userpost)
routes.put("/postUpdate",userPostUpdate)
routes.delete("/podtDelete/:id",userPostDelete)

module.exports = routes