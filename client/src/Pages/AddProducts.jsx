import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddProducts = ()=>{
  const navigate = useNavigate()
  const[available,setAvailable] = useState(false)
  const [input,setInput] = useState({
    name:"",
    author:"",
    description:"",
    price:"",
   
    image:""
  })
  const handleCheckboxChange = (e)=>{
   setAvailable(e.target.checked)
  }
  const handleSubmit = async(e)=>{
   e.preventDefault()
   console.log(input,available)
   
   try {
    const result=await axios.post("http://localhost:9000/api/add/book",{
      name:String(input.name),
      author:String(input.author),
      description:String(input.description),
      price:Number(input.price),
      image:String(input.image),
      available:Boolean(available),
    })
    if(result){
      alert(result.data.msg)
      navigate("/books")
    }
   } catch (error) {
    alert(error.message)
   }
  }
  return(
    <>
    <div className="heading">
    <h1 style={{textDecoration:"none",textAlign:"center",alignItems:"center",display:"grid",fontSize:40,marginTop:10}}>Add a new product</h1>
    </div>
    <div className="form">
    <form onSubmit={handleSubmit}>
<div class="mb-3">
  <label for="Name" class="form-label">Name</label>
  <input name='name' value={input.name} type="text" class="form-control" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
 
</div>
<div class="mb-3">
  <label for="Author" class="form-label">Author</label>
  <input name='author' value={input.author} type="text" class="form-control"  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
 
</div>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Description</label>
  <input name='description' value={input.description} type="text" class="form-control"   onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
 
</div>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Price in Rs</label>
  <input name='price' value={input.price} type="number" class="form-control"  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
 
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Image</label>
  <input name='image' value={input.image} type="text" class="form-control" id="exampleInputPassword1" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
</div>
<div class="mb-3 form-check">
  <input  checked={available} type="checkbox" class="form-check-input" id="exampleCheck1" onChange={handleCheckboxChange}/>
  <label class="form-check-label" for="exampleCheck1">Available</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}
export default AddProducts

  

