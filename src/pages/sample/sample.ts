import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Sample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html'
})
export class SamplePage {
@Input() ans: any;
num = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplePage');
  }

  add(){
    this.ans = Number(this.num['num1']) + Number(this.num['num2']);
  }

}
