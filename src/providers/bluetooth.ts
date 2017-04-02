import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/*
  Generated class for the Bluetooth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Bluetooth {
  devices:any;
  isScanning:any;
  device:any;

  constructor(public http: Http, public bt:BluetoothSerial) {

  }

  connect(device){
    this.device = device;
    this.bt.connect(this.device.id).subscribe();
    console.log('connected '+this.device.id);
  }
  disconnect(){
    this.bt.disconnect();
    console.log('disconnected');
  }
  write(data:any){
    this.bt.write(data).then(
      function(response){
        console.log(response);
        console.log(data);
      },
      function(response){
        console.log(response);
        console.log(data);
      }
    );
  }
  read(){
    var data;
    this.bt.read().then(
      function(values){
        console.log(values);
        data = values;
      },
      function(response){
        console.log(response);
        console.log(data);
      }
    );
    return data;
  }


}
