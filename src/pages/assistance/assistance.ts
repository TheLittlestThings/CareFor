import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasketPage } from '../basket/basket';
import { BasketService } from '../../app/basket.service';


@Component({
  selector: 'page-assistance',
  templateUrl: 'assistance.html'
})
export class AssistancePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(
    public navCtrl: NavController,
    private service : BasketService
  ) {
  }

  ngOnInit(){
    console.log('assistance ngoninit');
  }

  private value;
  addToBasket(params, item: string){
    console.log('form value:');
    console.log(this.value);
    if (!params) params = {};
    this.service.addItemToBasket(item);
    this.navCtrl.push(BasketPage);
  }
}
