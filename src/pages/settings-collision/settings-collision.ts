import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Bluetooth } from '../../providers/bluetooth';

/*
  Generated class for the SettingsCollision page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings-collision',
  templateUrl: 'settings-collision.html'
})
export class SettingsCollisionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bt:Bluetooth) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsCollisionPage');
  }

  t1(e){
    console.log('t1');
    if(e.checked){
      this.bt.write('1');
    }else{
      this.bt.write('2');
    }
  }
  t2(e){
    console.log('t2');
    if(e.checked){
      this.bt.write('3');
    }else{
      this.bt.write('4');
    }
  }
  t3(e){
    console.log('t3');
    if(e.checked){
      this.bt.write('5');
    }else{
      this.bt.write('6');
    }
  }
  t4(e){
    console.log('t4');
    if(e.checked){
      this.bt.write('7');
    }else{
      this.bt.write('8');
    }
  }
}
