const mongoose = require("mongoose")

const DB = mongoose.connect("mongodb://localhost:27017/instagram",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connected Successfully")
}).catch((err)=>{
    console.log("Error",err)
})

module.exports = {
    DB
}