import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1'

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title: 'first book', author: 'first author', id:1},
        {title: 'second book', author: 'second author', id:2}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id:uuid()}])
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id != id));
    }

    return (
        <BookContext.Provider value={{books, addBook, deleteBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;