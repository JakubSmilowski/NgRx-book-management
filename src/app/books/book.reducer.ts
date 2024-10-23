import { createReducer, on, State } from "@ngrx/store";
import { AddBook, AddBookSucces, AddBookFailure, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState, 
    //AddBook only returns current state
    on(AddBook, (state, {id, title, author}) => {return state}),
    
    //on action AddBookSucces, we tell the program to copy the state of array and add the book with the id...  
    // '...' copy the array
    on(AddBookSucces, (state, {id, title, author}) => [...state, {id, title, author}]), 
    
    on(AddBookFailure, (state, {error}) => {
        console.error(error);
        return state;
    }),

    //on action RemoveBook it checks the state of book with the certain Id and than it filters (so returns
    //the new array. with the every other book.)
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId)),

    
);