import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { MealsPage } from '../meals/meals';
import { PetFoodPage } from '../pet-food/pet-food';
import { AssistancePage } from '../assistance/assistance';
import { SubmittedPage } from '../submitted/submitted';
import { BasketService } from '../../app/basket.service'
import { FreshdeskProvider } from '../../providers/freshdesk'
import { Basket } from '../../classes/basket'

@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html'
})
export class BasketPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  private basket : Basket;

  constructor(
    public navCtrl: NavController,
    private provider : FreshdeskProvider
  ) {
  }
  submitBasket(params) {
    if (!params) params = {};
    
    // push basket to fresh desk
    this.provider.addBasket(this.basket);

    this.navCtrl.push(SubmittedPage);
  }
}
