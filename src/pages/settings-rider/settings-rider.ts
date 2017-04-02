import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Bluetooth } from '../../providers/bluetooth'

/*
  Generated class for the SettingsRider page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings-rider',
  templateUrl: 'settings-rider.html'
})
export class SettingsRiderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bt:Bluetooth) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsRiderPage');
  }

  modeRider() {
    console.log('rider');
    this.bt.write('11');
  }

  modeSafe() {
    console.log('safe');
    this.bt.write('12');
  }

}
