import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasketPage } from '../basket/basket';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { PetFoodPage } from '../pet-food/pet-food';
import { AssistancePage } from '../assistance/assistance';
import { SubmittedPage } from '../submitted/submitted';
import { BasketService } from '../../app/basket.service';
import { FreshdeskProvider } from '../../providers/freshdesk';


@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
  providers: [FreshdeskProvider]
})

export class MealsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(
    public navCtrl: NavController,
    private service : BasketService
  )
  {
  }

  addToBasket(params, item: string){
    if (!params) params = {};
    this.service.addItemToBasket(item);
    this.navCtrl.push(BasketPage);
  }
}
