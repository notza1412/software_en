import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay';
/**
 * Generated class for the Z7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-z7',
  templateUrl: 'z7.html',
})
export class Z7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goPayPage() {
    this.navCtrl.push(PayPage);
  }

}
