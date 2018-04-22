import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MealsPage } from '../meals/meals';
import { BasketPage } from '../basket/basket';
import { SubmittedPage } from '../submitted/submitted';
import { PetFoodPage } from '../pet-food/pet-food';
import { AssistancePage } from '../assistance/assistance';

@Component({
  selector: 'page-care-for-carson-city-nv',
  templateUrl: 'care-for-carson-city-nv.html'
})
export class CareForCarsonCityNVPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToMeals(params){
    if (!params) params = {};
    this.navCtrl.push(MealsPage);
  }goToBasket(params){
    if (!params) params = {};
    this.navCtrl.push(BasketPage);
  }goToCareForCarsonCityNV(params){
    if (!params) params = {};
    this.navCtrl.push(CareForCarsonCityNVPage);
  }goToSubmitted(params){
    if (!params) params = {};
    this.navCtrl.push(SubmittedPage);
  }goToPetFood(params){
    if (!params) params = {};
    this.navCtrl.push(PetFoodPage);
  }goToAssistance(params){
    if (!params) params = {};
    this.navCtrl.push(AssistancePage);
  }
}
