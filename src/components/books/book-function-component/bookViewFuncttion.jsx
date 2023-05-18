import React from 'react'
import { Link, useParams } from 'react-router-dom'


const BookViewFunction = () => {
    const params=useParams();
  return (
    <div className='my-5 card'>
     <div className='card-header bg-secondary text-white'>
        <h2>Book View : {params.bookId}</h2>
    </div>
    <div className='card-body'>
        {params.bookId}
    </div>
    <div className='card-footer bg-secondary text-white'>
        <Link className='btn btn-light' to="/book-store-function" >Close</Link>
        
    </div>
    </div>
  )
}

export default BookViewFunction
