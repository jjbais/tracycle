import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Bluetooth } from '../../providers/bluetooth';

/*
  Generated class for the Status page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})
export class StatusPage {

@Input() gas: any;
@Input() tire: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bt:Bluetooth) {
    this.gas = 0;
    this.tire = 0;
    var value = this.bt.read();
    if(value[0]=='1'){
      this.gas = Number(value[1]+value[2]);
    }else if(value[0]=='2'){
      this.tire = Number(value[1]+value[2]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  
  nearStation(){
    console.log('nearest');
  }
}
