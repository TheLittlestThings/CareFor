import { Injectable } from '@angular/core';
import { Basket } from '../classes/basket';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

//import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/navigation/url-serializer';

const userName : string = "zoe@tltnv.com";
const password : string = "CareFor2018!";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 
  'Authorization' : 'Basic ' + userName + ":" + password})
};

@Injectable()
export class BasketService {
  basket: Basket;
  private freshdeskUrl = 'https://tltnv.freshdesk.com/api/v2/tickets';
  constructor(
    public http: HttpClient
  ) {
  }

  addItemToBasket(item: string) {

    if (this.basket == undefined) {
      this.basket = new Basket();
      this.basket.items = new Array();
    }

    this.basket.items.push(item);
    this.showItemsInBasket();
  }

  removeItemToBasket(id: number) {
    this.basket.items.splice(id, 1);
  }

  submit() {
    this.http.post(this.freshdeskUrl,
      this.basket,
      httpOptions).pipe(
        tap(_ => console.log())),
        catchError(this.handleError('addBasket'));
    
  }

  showItemsInBasket() {
    this.basket.items.forEach(function (element) {
      console.log(element);
    })
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
