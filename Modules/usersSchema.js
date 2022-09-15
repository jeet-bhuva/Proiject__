const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    fname: {
        type: String
    },
    mname: {
        type: String
    },
    lname: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    age: {
        type: Number
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    })

const postSchema = new mongoose.Schema({
    Posttitel: {
        type: String
    },
    Description: {
        type: String
    },
    image: {
        type: String
    },
    Likes: {
        type: String
    },
    Comment: {
        type: String
    }
})


const user = mongoose.model('UsersData', userSchema)
const postmodel = mongoose.model('POstdata', postSchema)

module.exports = {
    user , postmodel
}
