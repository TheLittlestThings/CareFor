import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { MealsPage } from '../meals/meals';
import { BasketPage } from '../basket/basket';
import { SubmittedPage } from './submitted';
import { PetFoodPage } from '../pet-food/pet-food';
import { AssistancePage } from '../assistance/assistance';

@Component({
  selector: 'page-submitted',
  templateUrl: 'src/pages/submitted/submitted.html'
})
export class SubmittedPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCareForCarsonCityNV(params){
    if (!params) params = {};
    this.navCtrl.push(CareForCarsonCityNVPage);
  }goToMeals(params){
    if (!params) params = {};
    this.navCtrl.push(MealsPage);
  }goToBasket(params){
    if (!params) params = {};
    this.navCtrl.push(BasketPage);
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
