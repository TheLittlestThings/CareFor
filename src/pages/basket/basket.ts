import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { MealsPage } from '../meals/meals';
import { PetFoodPage } from '../pet-food/pet-food';
import { AssistancePage } from '../assistance/assistance';
import { SubmittedPage } from '../submitted/submitted';
import { BasketService } from '../../app/basket.service'

@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html'
})
export class BasketPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  basketItems = BasketService.basketItems;

  constructor(public navCtrl: NavController) {
  }
  submitBasket(params) {
    if (!params) params = {};
    //TODO put http provider here
    this.navCtrl.push(SubmittedPage);
  }
}
