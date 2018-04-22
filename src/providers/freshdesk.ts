import { Basket } from '../classes/basket';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/*
  Generated class for the ProvidersFreshdeskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FreshdeskProvider {

  private freshdeskUrl = 'https://tltnv.freshdesk.com/api/v2/tickets';

  constructor(
    public http: HttpClient
  ) {
  }
 
  addBasket(basket: Basket) {
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

