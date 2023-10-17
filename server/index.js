import express from "express"
import cors from "cors"
import dbConnect from "./config/db.js"
import router from "./routes/bookRoutes.js"
const app = express()
dbConnect()
app.use(express.json())
app.use(cors()) 


 

app.use("/api",router)
app.listen(9000,()=>{
    console.log("Server Started")
})