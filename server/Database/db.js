const mongoose = require("mongoose")
const dbConnection =async ()=>{
    const MONGO_URI = "mongodb+srv://karunyapurasaloor:karunya@cluster0.71qdbnq.mongodb.net/Filesharing?retryWrites=true&w=majority"
    try {
         await mongoose.connect(MONGO_URI , {useNewUrlParser : true}) 
         console.log("database connected")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={
    dbConnection
}