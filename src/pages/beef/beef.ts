import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Z3Page } from '../z3/z3'
import { Z4Page } from '../z4/z4'
import { Z5Page } from '../z5/z5'
//import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the BeefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beef',
  templateUrl: 'beef.html',
})
export class BeefPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goZ3Page() {
    this.navCtrl.push(Z3Page);
  }

  goZ4Page() {
  this.navCtrl.push(Z4Page);
}

  goZ5Page() {
  this.navCtrl.push(Z5Page);
}

}


