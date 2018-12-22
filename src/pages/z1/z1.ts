import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay';
/**
 * Generated class for the Z1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-z1',
  templateUrl: 'z1.html',
})
export class Z1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goPayPage() {
    this.navCtrl.push(PayPage);
  }
}
