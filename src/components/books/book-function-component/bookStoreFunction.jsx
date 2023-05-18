import React, { useState } from 'react'
import BookItem from './bookItemFunction'


const BookStore = () => {
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
    const handleDelete = (eachBook) => {
        let allBook =allBooks;
        allBook =allBook.filter((eBook)=> eBook.id!== eachBook.id);
        setAllBooks(allBook);
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
               // onView={handleView}></BookItemFunction>
               />
        ))
    }
    return (
        <div className="container m-5">
            <table className="table table-striped">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>GENRE</th>
                        <th>COST</th>
                        <th>ACTIONS</th>
                        
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
