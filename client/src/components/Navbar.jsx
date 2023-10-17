import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <Link to="/">
 <i style={{fontSize:28,marginLeft:10}} class="fas fa-book"></i> 
 </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div style={{marginLeft:900}} class="collapse navbar-collapse" id="navbarNav">
    <ul  class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/add-product">Add Products</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/books">Books</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About Us</Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default Navbar