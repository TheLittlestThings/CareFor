import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CareForCarsonCityNVPage } from '../care-for-carson-city-nv/care-for-carson-city-nv';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CareForCarsonCityNVPage;
  tab2Root: any = ProfilePage;
  tab3Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
