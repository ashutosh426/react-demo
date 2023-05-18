import React, { Component } from 'react'

export default class BookItem extends Component {
    state={

    }
    
    handleDelete =() =>{
        //here we suppose to handle delete operation of the bookItem
        //the rule is the component which hold the state should be responsible to manipulate the data
        //so here the parent component hold the state then bookStore component should responsible to delelte the data
        //so the child component has to raise the event and let the parent component know that the event has occured,
        //so the parent component will handle the vent

    }

  render() {
    return (
      <>
            <tr key={this.props.data.id}>
                <td>{this.props.data.id}</td>
                <td><img src={this.props.data.bookImageUrl} width="150px" height="100px" alt="bookImage"></img></td>
                <td>{this.props.data.bookTitle}</td>
                <td>{this.props.data.bookAuthor}</td>
                <td>{this.props.data.bookGenre}</td>
                <td>{this.props.data.bookCost}</td>
                <td><button type="button" className='btn btn-danger btn-sm' onClick={()=>{this.props.onDelete(this.props.data.id)}}>Delete</button></td>
            </tr>
      </>
  )
  }
}
