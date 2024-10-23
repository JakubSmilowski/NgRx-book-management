import {createAction, props} from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>()); //Our action
export const AddBookSucces = createAction('[Book], Added Book Succesflully', props<{ id: string; title: string; author: string }>());
export const AddBookFailure = createAction('[Book], Add Book Failure', props<{error: any}>());



export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>()); //Our action

