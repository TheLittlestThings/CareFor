import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasketPage } from '../basket/basket';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { MealsPage } from '../meals/meals';
import { PetFoodPage } from '../pet-food/pet-food';
import { AssistancePage } from './assistance';
import { SubmittedPage } from '../submitted/submitted';

@Component({
  selector: 'page-assistance',
  templateUrl: 'src/pages/assistance/assistance.html'
})
export class AssistancePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToBasket(params){
    if (!params) params = {};
    this.navCtrl.push(BasketPage);
  }goToCareForCarsonCityNV(params){
    if (!params) params = {};
    this.navCtrl.push(CareForCarsonCityNVPage);
  }goToMeals(params){
    if (!params) params = {};
    this.navCtrl.push(MealsPage);
  }goToPetFood(params){
    if (!params) params = {};
    this.navCtrl.push(PetFoodPage);
  }goToAssistance(params){
    if (!params) params = {};
    this.navCtrl.push(AssistancePage);
  }goToSubmitted(params){
    if (!params) params = {};
    this.navCtrl.push(SubmittedPage);
  }
}
