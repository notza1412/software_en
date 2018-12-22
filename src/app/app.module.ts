import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireList } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EstPage } from '../pages/est/est';
import { NewyorkPage } from '../pages/newyork/newyork';
import { BeefPage } from '../pages/beef/beef';
import { MapPage } from '../pages/map/map';
import { FinalPage } from '../pages/final/final';
import { PayPage } from '../pages/pay/pay';
import { Z1Page } from '../pages/z1/z1';
import { Z2Page } from '../pages/z2/z2';
import { Z3Page } from '../pages/z3/z3';
import { Z4Page } from '../pages/z4/z4';
import { Z5Page } from '../pages/z5/z5';
import { Z6Page } from '../pages/z6/z6';
import { Z7Page } from '../pages/z7/z7';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    BeefPage,
    NewyorkPage,
    EstPage,
    PayPage,
    MapPage,
    FinalPage,
    Z1Page,
    Z2Page,
    Z3Page,
    Z4Page,
    Z5Page,
    Z6Page,
    Z7Page,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    BeefPage,
    NewyorkPage,
    EstPage,
    PayPage,
    MapPage,
    FinalPage,
    Z1Page,
    Z2Page,
    Z3Page,
    Z4Page,
    Z5Page,
    Z6Page,
    Z7Page,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
