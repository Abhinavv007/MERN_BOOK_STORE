import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";

const Book = (props) => {
  const navigate = useNavigate()
  const {_id, name, author, description, price, image,available } = props.cards;
  const handleUpdate = ()=>{
    navigate(`/books/${_id}`)
  }
  const handleDelete = async()=>{
    const res = await axios.delete(`http://localhost:9000/api/delete/${_id}`)
    if(res){
      alert(res.data.msg)
      window.location.reload()
    }
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">By: {author}</p>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">Available: {available===true? "Yes":"No"}</p>
        <button onClick={handleUpdate} style={{ display: "flex", textDecoration: "none" ,marginBottom:10}}>Update</button>
        <button onClick={handleDelete} style={{ display: "flex", textDecoration: "none" }}>Delete</button>
      </div>
    </div>
  );
};

export default Book;
