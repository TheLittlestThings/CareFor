import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { MealsPage } from '../meals/meals';
import { BasketPage } from '../basket/basket';
import { PetFoodPage } from '../pet-food/pet-food';
import { AssistancePage } from '../assistance/assistance';

@Component({
  selector: 'page-submitted',
  templateUrl: 'submitted.html'
})
export class SubmittedPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
    ionViewCanLeave() : boolean{
      return false;
  }
  goToHome(){
    //TODO This makes a runtime error... fix this
    this.navCtrl.goToRoot(null)
  }
}
