import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookAddFunction = () => {
  const [title, setTitle] = useState("ADD NEW BOOK");
  const [newBook, setNewBook] = useState({
    id: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: "",
    bookImageUrl: "",
  });

  const handleSubmit =(event) =>{
    event.preventDefault();
    console.log(newBook);
  }

  return (
    <div className="container my-2">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header bg-success text-white">
            <h2>{title}</h2>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="idBookTitle">Book Title:</label>
              <input
                type="text"
                className="form-control"
                id="idBookTitle"
                onChange={(event) =>
                  setNewBook({ ...newBook, bookTitle: event.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="idBookAuthor" className="form-label">
                Book Author:
              </label>
              <input
                type="text"
                className="form-control"
                id="idBookAuthor"
                onChange={(event) =>
                  setNewBook({ ...newBook, bookAuthor: event.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="idBookGenre" className="form-label">
                Book Genre:
              </label>
              <select
                id="idBookGenre"
                className="form-control"
                onChange={(event) =>
                  setNewBook({ ...newBook, bookGenre: event.target.value })
                }
              >
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
                <option value="Fiction">Fiction</option>
                <option value="Romance">Romance</option>
              </select>
            </div>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="idBookCost" className="form-label">
                Book Cost:
              </label>
              <input
                type="text"
                className="form-control"
                id="idBookCost"
                onChange={(event) =>
                  setNewBook({ ...newBook, bookCost: event.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="card-body">
            <div>
              <label>Book Image URL:</label>
              <input
                type="text"
                className="form-control"
                id="bookImageUrl"
                onChange={(event) =>
                  setNewBook({ ...newBook, bookImageUrl: event.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="card-footer bg-success text-white">
            <button type="submit" className="btn btn-light text-success">
              Add
            </button>
            <Link
              className="btn btn-light float-end text-danger"
              to="/book-store-function"
            >
              Close
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookAddFunction;
