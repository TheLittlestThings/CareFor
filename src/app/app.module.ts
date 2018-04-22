import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CareForCarsonCityNVPage } from '../pages/care-for-carson-city-nv/care-for-carson-city-nv';
import { MealsPage } from '../pages/meals/meals';
import { PetFoodPage } from '../pages/pet-food/pet-food';
import { AssistancePage } from '../pages/assistance/assistance';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { BasketPage } from '../pages/basket/basket';
import { SubmittedPage } from '../pages/submitted/submitted';
import { BasketService } from './basket.service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FreshdeskProvider } from '../providers/freshdesk';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    CareForCarsonCityNVPage,
    MealsPage,
    PetFoodPage,
    AssistancePage,
    ProfilePage,
    SettingsPage,
    TabsControllerPage,
    BasketPage,
    SubmittedPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CareForCarsonCityNVPage,
    MealsPage,
    PetFoodPage,
    AssistancePage,
    ProfilePage,
    SettingsPage,
    TabsControllerPage,
    BasketPage,
    SubmittedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BasketService,
    FreshdeskProvider,
    HttpClient,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
