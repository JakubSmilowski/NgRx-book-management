import { Book } from "./models/book";

export interface AppState {
    readonly book: Book[]; //By convention we call it book not books
}
