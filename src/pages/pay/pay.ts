import { Component,ViewChild,ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  @ViewChild('map') mapRef : ElementRef;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.showMap(),
    console.log('ionViewDidLoad PayPage');
  
  }
  showMap(){
    const location = new google.maps.LatLng(16.746470, 100.193441);

    const option = {
      center:location,
      zoom : 15,
      streetViewControl: false,
      mapTypeId: 'terrain'
    }
    const map = new google.maps.Map(this.mapRef.nativeElement,option);

    this.addMarker(location, map)

  }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    })

  }
   
  goConPage() {
    this.navCtrl.push(MapPage);
  }

}