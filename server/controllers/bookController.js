import bookModel from "../models/bookModel.js"
class bookController{
    static getAllBooks=async(req,resp)=>{
        try {
            const allBooks = await bookModel.find({})
            if(allBooks){
                resp.json({msg:allBooks})
            } else{
                resp.json({msg:"No book found"})

            }
        } catch (error) {
            resp.json({msg:error.message})
            
        }
    }
    static addBook = async(req,resp)=>{
      const{name,author,description,price,image,available} = req.body
   
      try {
       
          const newBook = new bookModel({
            name,
            author,
            description,
            price,
            image,
            available
            
          })
          const result =await newBook.save()
    
          resp.json({msg:"Book Added Successfully"})
        
      } catch (error) {
            resp.json({msg:error.message})
        
      }
    }
    static getSingleBook =async(req,resp)=>{
        const {id} = req.params
        
        try {
            if(id){
              const book = await bookModel.findById(id)
              resp.json({msg:book})
              
            } else{
                resp.json({msg:"Please fill the required field"})
            }
        } catch (error) {
            resp.json({msg:error.message})
        }
    }
    static updateBook=async(req,resp)=>{
        const {id} = req.params
        const{name,author,description,price,available,image} = req.body
        try {
            const book = await bookModel.findByIdAndUpdate(id,{
                name,
                author,
                description,
                price,
                available,
                image
            },
            { new: true } )
            const result = await book.save()
            resp.json({msg:"Book Updated Successfully"})
            
        } catch (error) {
            resp.json({msg:error.message})
        }
    }
    static deleteBook = async(req,resp)=>{
        const {id} = req.params
        try {
            const book = await bookModel.findByIdAndRemove(id)
            if(book){
            resp.json({msg:"Deleted Successfully"})

            } else{
            resp.json({msg:"Failed to delete"})

            }
            
        } catch (error) {
            resp.json({msg:error.message})
        }
    }
}
export default bookController