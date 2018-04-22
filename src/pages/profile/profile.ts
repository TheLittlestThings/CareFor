import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../../classes/profile';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  profile : Profile = {
    fullname : '',
    telephone : '',
    allergies : ''
   };
  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.getProfile();
  }

  getProfile()
  {
    this.profile = JSON.parse(localStorage.getItem('profile'));

    if (this.profile == undefined)
    {
      this.profile = {
        fullname : '',
        telephone : '',
        allergies : ''
      }
    }

    console.log(this.profile);

  }

  saveProfile()
  {
    localStorage.setItem('profile', JSON.stringify(this.profile));
    alert('profile saved');
  }
  
}
