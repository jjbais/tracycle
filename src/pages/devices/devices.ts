import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MainMenuPage } from '../main-menu/main-menu';

import { Bluetooth } from '../../providers/bluetooth';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


/*
  Generated class for the Devices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {

  devices:Array<any>;
  isScanning:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public btdb:Bluetooth, public bt:BluetoothSerial) {
    this.devices = [];
    this.isScanning = false;
    this.bt.isEnabled().then(
      function(response){
        console.log('bluetooth '+response);
      },
      function(response){
        console.log('bluetooth '+response);
        bt.enable();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }

  startScanning() {
    console.log('Scanning Started');
    this.isScanning = true;
    this.btdb.isScanning = true;
    this.bt.list().then(
      values => {
        console.log(values);
        this.devices = values;
        this.btdb.devices = this.devices
        this.isScanning = false;
        this.btdb.isScanning = false;
      }
    );
  } 

  connectToDevice(device) {
    console.log('Connect To Device');
    console.log(JSON.stringify(device))
    this.btdb.connect(device);
    this.navCtrl.setRoot( MainMenuPage );
  }

}
