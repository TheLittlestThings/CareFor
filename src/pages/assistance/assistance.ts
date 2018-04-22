import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasketPage } from '../basket/basket';
import { BasketService } from '../../app/basket.service';
import { FreshdeskProvider } from '../../providers/freshdesk';


@Component({
  selector: 'page-assistance',
  templateUrl: 'assistance.html',
  providers: [FreshdeskProvider]
})
export class AssistancePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(
    public navCtrl: NavController,
    private service : BasketService
  ) {
  }
  addToBasket(params, item: string){
    if (!params) params = {};
    this.service.addItemToBasket(item);
    this.navCtrl.push(BasketPage);
  }
}
