import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import {v4 as uuidV4 } from 'uuid';

const BookForm = (props) => {

    const [ book, setBook ] = useState({
        bookName: props.book ? props.book.bookName : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
    });

    const [errorMessage, setErrorMessage]       = useState('');
    const { bookName, author, quantity, price } = book;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookName, author, quantity, price];
        let errorMessage = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const book = {
                id: uuidV4(),
                bookName,
                author,
                price,
                quantity,
                date: new Date()
            };
            props.handleOnSubmit(book);
        } else {
            errorMessage = 'Please fill out all the fields.';
        }
        setErrorMessage(errorMessage);
    };

    const handleInputChange = (event) => {
        const [name , value] = event.target;

        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price' :
                if(price === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook( (prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    }

    return (
        <div className="main-form">
            { errorMessage && <p className="errorMsg"> {errorMessage} </p>}

            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control className="input-control"
                          type="text"
                          name="bookName"
                          value={bookName}
                          placeholder="Enter name of book"
                          onChange={handleInputChange}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="author">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="author"
                        value={author}
                        placeholder="Enter name of author"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter available quantity"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Book Price</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Enter price of book"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );

}

export default BookForm;