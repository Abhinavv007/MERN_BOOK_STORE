import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import AddProducts from "./Pages/AddProducts";
import Update from "./Pages/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/books" element={<Books />} />
          <Route path="/add-product" element={<AddProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Update />} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
