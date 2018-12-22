import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Z1Page } from '../z1/z1'
import { Z2Page } from '../z2/z2'
/**
 * Generated class for the NewyorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newyork',
  templateUrl: 'newyork.html',
})
export class NewyorkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goZ1Page() {
    this.navCtrl.push(Z1Page);
  }
  goZ2Page() {
    this.navCtrl.push(Z2Page);
  }

}




