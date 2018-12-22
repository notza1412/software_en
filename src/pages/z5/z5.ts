import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay';
/**
 * Generated class for the Z5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-z5',
  templateUrl: 'z5.html',
})
export class Z5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goPayPage() {
    this.navCtrl.push(PayPage);
  }

}
