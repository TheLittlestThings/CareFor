import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { SubmittedPage } from '../submitted/submitted';
import { BasketService } from '../../app/basket.service'
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
    private service : BasketService
  ) {
  }
  submitBasket(params) {
    if (!params) params = {};

    // push basket to fresh desk
    this.service.submit();

    this.navCtrl.push(SubmittedPage);
  }goToCareForCarsonCityNV(params){
  if (!params) params = {};
  this.navCtrl.push(CareForCarsonCityNVPage);
}
}
