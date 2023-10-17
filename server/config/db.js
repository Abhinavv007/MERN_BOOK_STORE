import mongoose from "mongoose"
const dbConnect=async()=>{
    const result = await mongoose.connect("mongodb://127.0.0.1:27017/Book-Store")
    if(result)
    {
        console.log("Database Connected")

    } else{
        console.log("Database failed to connect!!!")

    }
}
export default dbConnect