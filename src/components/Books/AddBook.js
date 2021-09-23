import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ history, books, setBooks }) => {
    const handleOnSubmit = (book) => {
        // if(books === null ) {
        //     setBooks([book]);
        // } else {
        //     setBooks([...books, book]);
        // }

        setBooks([...books, book]);

        history.push('/');
    };

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddBook;