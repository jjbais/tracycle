import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsCollisionPage } from '../settings-collision/settings-collision';
import { SettingsRiderPage } from '../settings-rider/settings-rider';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  collision(){
    console.log('collision');
    this.navCtrl.push(SettingsCollisionPage);
  }

  rider(){
    console.log('rider');
    this.navCtrl.push(SettingsRiderPage);
  }

}
