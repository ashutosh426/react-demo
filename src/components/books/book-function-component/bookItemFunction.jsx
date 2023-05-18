import React from 'react'

const BookItem = (props) => {
  return (
    <>
        <tr key={props.data.id}>
            <td>{props.data.id}</td>
            <td><img src={props.data.bookImageUrl} width="150px" height="100px" alt="bookImage"></img></td>
            <td>{props.data.bookTitle}</td>
            <td>{props.data.bookAuthor}</td>
            <td>{props.data.bookGenre}</td>
            <td>{props.data.bookCost}</td>
            <td><button type="button" className='btn btn-danger btn-sm' onClick={()=>{props.onDelete(props.data)}}>Delete</button></td>
            <td><button type="button" className='btn btn-primary btn-sm' onClick={()=>{props.onView(props.data)}}>View</button></td>

        </tr>
    </>
  )
}

export default BookItem
