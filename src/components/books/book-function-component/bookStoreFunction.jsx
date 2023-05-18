import React, { useState } from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import BookItem from './bookItemFunction'


const BookStore = () => {

    const navigate= useNavigate();
    const [title,setTiltle] =useState("LIST OF BOOKS");
    const [allBooks,setAllBooks] =useState([
        {
            "id": 101,
            "bookTitle": "Harry Potter and the Order Of Phoenix",
            "bookAuthor": "J.K.Rowling",
            "bookGenre": "Fiction",
            "bookCost": "200",
            "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
          },
          {
            "id": 102,
            "bookTitle": "Harry Potter and the Sorcerers' Stone",
            "bookAuthor": "J.K.Rowling",
            "bookGenre": "Fiction",
            "bookCost": "300",
            "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
        ]
    )
    const handleAddNewButton =() =>{
        //here we should route to BookAddFunction
        //for this we need useNavigate from 'react-router-dom'
        // navigate('book-add'); this is relative routing
        navigate('book-add');
    }
    const handleDelete = (eachBook) => {
        let allBook =allBooks;
        allBook =allBook.filter((eBook)=> eBook.id!== eachBook.id);
        setAllBooks(allBook);
    }

    const handleView =(eachBook) =>{
        //Here navigate to bookViewFunction
        navigate(`book-view/${eachBook.id}`);
    }
    const renderAllBooks=()=>{
        return allBooks.map((eachBook)=>(
            <BookItem 
                key={eachBook.id}
                data={eachBook} 
                // onDelete={()=>handleDelete(eachBook)}
                // onView={()=>handleView(eachBook)}></BookItemFunction>
                // onDelete={(bookData)=>handleDelete(bookData)}
                // onView={(bookData)=>handleView(bookData)}></BookItemFunction>
                onDelete={handleDelete}
                onView={handleView}
               />
        ))
    }
    return (
                <div className="container m-5">
                    <h1>{title}</h1>
                    <button type="button" className='btn btn-success my-5' 
                            onClick={handleAddNewButton}>Add New Book Button</button>
                    <Outlet></Outlet>
                    <table className="table table-striped">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>IMAGE</th>
                                <th>TITLE</th>
                                <th>AUTHOR</th>
                                <th>GENRE</th>
                                <th>COST</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderAllBooks()}
                        </tbody>
                    </table>
                </div>
             )
    }

export default BookStore
