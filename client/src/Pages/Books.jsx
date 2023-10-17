import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';

function Books() {
  const [input, setInput] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result = await axios.get("http://localhost:9000/api/books");
        setInput(result.data.msg);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">All Books are here</h1>
      <div className="row">
        {input.map((book) => (
          <div className="col-md-4" key={book._id}>
            <Book cards={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
