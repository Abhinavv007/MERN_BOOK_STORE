import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
   <h1 style={{textDecoration:"none",textAlign:"center",alignItems:"center",display:"grid",fontSize:40,marginTop:10}}>Welcome to MERN BOOK-STORE</h1>
   <Link style={{textDecoration:"none",textAlign:"center",alignItems:"center",display:"grid",fontSize:80,marginTop:40}} to="/books">View All Books</Link>
   </>
  )
}

export default Home