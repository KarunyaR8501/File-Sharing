const express = require("express")
const router = require("./Routes/routes")
const cors = require("cors")
const {dbConnection} = require("./Database/db")

const app = express()
app.use(cors())
app.use("/" , router)

const PORT = 8000
dbConnection()

app.listen(PORT , ()=>{
    console.log(`server started ${PORT}`)
})