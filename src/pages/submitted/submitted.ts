import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasketService } from '../../app/basket.service'

@Component({
  selector: 'page-submitted',
  templateUrl: 'submitted.html'
})
export class SubmittedPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(
    public navCtrl: NavController,
    private service : BasketService
  ) {

  }
  //   ionViewCanLeave() : boolean{
  //     return false;
  // }
  goToHome(){
    //TODO This makes a runtime error... fix this
    this.navCtrl.goToRoot({})
  }
}
