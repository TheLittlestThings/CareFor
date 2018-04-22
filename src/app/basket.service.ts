import { Injectable } from '@angular/core';
import { Basket } from '../classes/basket';
import { FreshdeskProvider } from '../providers/freshdesk';
//import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/navigation/url-serializer';

@Injectable()
export class BasketService {
  basket: Basket;
  constructor(
    private provider: FreshdeskProvider
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
    this.provider.addBasket(this.basket);
  }

  showItemsInBasket() {
    this.basket.items.forEach(function (element) {
      console.log(element);
    })
  }

}

