import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Z6Page } from '../z6/z6'
import { Z7Page } from '../z7/z7'

/**
 * Generated class for the EstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-est',
  templateUrl: 'est.html',
})
export class EstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goZ6Page() {
    this.navCtrl.push(Z6Page);
  }

  goZ7Page() {
  this.navCtrl.push(Z7Page);
}


}
