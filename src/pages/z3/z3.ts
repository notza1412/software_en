import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay';
/**
 * Generated class for the Z3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-z3',
  templateUrl: 'z3.html',
})
export class Z3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goPayPage() {
    this.navCtrl.push(PayPage);
  }

}
