import React, {createContext, useState, useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer';
// import uuid from 'uuid/v1'

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, []);

    // const addBook = (title, author) => {
    //     setBooks([...books, {title, author, id:uuid()}])
    // }

    // const deleteBook = (id) => {
    //     setBooks(books.filter(book => book.id != id));
    // }

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;