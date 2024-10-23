import { Injectable } from "@angular/core";
import {act, Actions, createEffect, ofType} from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { merge, mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    // we create an effects that executes code when the action addBook is dispached
    //And then runs the code 
    //

    //This is an NgRx effext that responds to 'AddBook' actions.
    addBook$ = createEffect(() => this.actions$.pipe(
        //Listen for actions of type 'AddBook'
        ofType(bookActions.AddBook), //if this appears

        //For each 'AddBook' action, call 'addBook' on the book service.
        //'mergeMap' allows multiple concurrent 'addBook' calls.
        mergeMap((action) => this.bookService.addBook(action) //margeMap takes multiple observable and turns into one
            .pipe(
                //if the 'addBook' call is succesful, dispatch 'AddBookSuccess' action with the book data
                map(book => bookActions.AddBookSucces(book)),

                //if the'addBook' call fails, dispatch 'AddBookFailure' action with the error
                catchError((error) => of(bookActions.AddBookFailure({error})))
            ))
    ));

    constructor(
        //Actions$ is the way of this file finding out when the action got dispached (run) real time
        private actions$: Actions,
        private bookService: BookService,
        
    ) {}

}