import { Injectable } from '@angular/core';
import { Basket } from '../classes/basket';
import { Ticket } from '../classes/ticket';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { BasketPage } from '../pages/basket/basket';
import { noUndefined } from '@angular/compiler/src/util';

//import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/navigation/url-serializer';

// TODO: Move to config file!
const userName: string = "zoe@tltnv.com";
const password: string = "CareFor2018!";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
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

      if (this.basket.custom_fields == undefined) {
        this.basket.custom_fields =
          {
            cf_requester_phone_number: '',
            cf_requestor_address: ''
          }
      }

      this.basket.custom_fields.cf_requester_phone_number = '';
      this.basket.custom_fields.cf_requestor_address = '';

      this.basket.items = new Array();
    }

    this.basket.items.push(item);
    this.showItemsInBasket();
  }

  removeItemToBasket(id: number) {
    this.basket.items.splice(id, 1);
  }

  createTicketFromBasket(basket: Basket): Ticket {
    let ticket = new Ticket();
    ticket.description = this.basket.items.join();
    ticket.subject = 'ticket from website';
    ticket.email = "test@careFor.org";
    ticket.priority = 3;
    ticket.status = 2;
    ticket.name = 'Jane Doe';

    if (ticket.custom_fields == undefined) {
      ticket.custom_fields =
        {
          cf_requester_phone_number: '',
          cf_requestor_address: ''
        }
    }

    ticket.custom_fields.cf_requester_phone_number = '555-555-5555';
    ticket.custom_fields.cf_requestor_address = '123 Test Street Anywhere, USA';

    //ticket.custom_fields.cf_requester_phone_number = this.basket.custom_fields.cf_requester_phone_number;
    //ticket.custom_fields.cf_requestor_address = this.basket.custom_fields.cf_requestor_address;

    return ticket;
  }

  submit() {
    const headers = new HttpHeaders()
      .append("Authorization", "Basic " + btoa(userName + ":" + password))
      .append("Content-Type", "application/json");

    let ticket = this.createTicketFromBasket(this.basket);

    return this.http.post(this.freshdeskUrl,
      ticket,
      { headers: headers }).subscribe(
        r => { console.log('resonse: ' + r); }
        , err => { console.log('error: ' + err); });
  }

  showItemsInBasket() {
    this.basket.items.forEach(function (element) {
      console.log(element);
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
