import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainMenuPage } from '../main-menu/main-menu';

import { DevicesPage } from '../devices/devices'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  mainMenu(){
    this.navCtrl.push(DevicesPage);
    //this.navCtrl.setRoot(MainMenuPage);
  }
}
