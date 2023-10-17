import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    name:String,
    author:String,
    description:String,
    price:Number,
    available:Boolean,
    image:String
})
const bookModel = mongoose.model("books",bookSchema)
export default bookModel