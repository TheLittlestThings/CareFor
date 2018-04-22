import { Basket } from '../classes/basket';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// TODO: do not burn in username password into code! Move to config file
const userName : string = "zoe@tltnv.com";
const password : string = "CareFor2018!";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 
  'Authorization' : 'Basic ' + userName + ":" + password})
};

@Injectable()
export class FreshdeskProvider {
  private freshdeskUrl = 'https://tltnv.freshdesk.com/api/v2/tickets';
  constructor(
    public http: HttpClient
  ) {
  }
 
  addBasket(basket: Basket) {

    basket.description = basket.items.join();

    this.http.post(this.freshdeskUrl,
      basket,
      httpOptions).pipe(
        tap(_ => console.log())),
        catchError(this.handleError('addBasket'));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


