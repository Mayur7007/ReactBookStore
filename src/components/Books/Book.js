import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Book = (book, handleRemoveBook) => {
    const history = useHistory();

    // const handleRemoveBook = (id) => {
    //     props.handleRemoveBook(id);
    // }

    return (
        <Card style={{ width: '18rem' }} className="book">
            <Card.Body>
                <Card.Title className="book-title">{book.bookName}</Card.Title>
                    <div className="book-details">
                    <div>Author: {book.author}</div>
                    <div>Quantity: {book.quantity} </div>
                    <div>Price: {book.price} </div>
                    <div>Date: {new Date(book.date).toDateString()}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${book.id}`)}>
                    Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveBook(book.id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Book;

