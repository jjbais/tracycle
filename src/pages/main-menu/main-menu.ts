//AIzaSyAW5cOAtrkaPXHJzqNy7etnYUFdhlTkaSg

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DevicesPage } from '../devices/devices';
import { LogsPage } from '../logs/logs';
import { SettingsPage } from '../settings/settings';
import { StatusPage } from '../status/status'
import { HomePage } from '../home/home';

import { Bluetooth } from '../../providers/bluetooth';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

declare var window: any;

@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public bt:Bluetooth, 
    private googleMaps: GoogleMaps
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage');
    if(window.SMS) window.SMS.startWatch(function(){
        		console.log('watching started');
        	}, function(){
        		console.log('failed to start watching');
        	});

    document.addEventListener('onSMSArrive', function(){
            if(window.SMS) window.SMS.listSMS({}, function(data){
                    var sms = data['body'];
                    const [check, lat, long] = "10AM-4PM".split('/');
                    if(check=='map'){
                      this.loadMap(new LatLng(+lat,+long));
                    }
              }, function(err){

              });
            }); 
  }

  ngAfterViewInit() {
    this.loadMap(new LatLng(43.0741904,-89.3809802));
  }

  disconnect(){
    console.log('disconnect');
    if(window.SMS) window.SMS.stopWatch(function(){
        		console.log('watching stopped');
        	}, function(){
        		console.log('failed to stop watching');
        	});
    this.bt.disconnect();
    this.navCtrl.setRoot(HomePage);
  }
  status(){
    console.log('status');
    this.navCtrl.push(StatusPage);
  }
  travelLogs(){
    console.log('travel logs');
    this.navCtrl.push(LogsPage);
  }
  settings(){
    console.log('settings');
    this.navCtrl.push(SettingsPage);
  }

  loadMap(location:LatLng) {
    // make sure to create following structure in your view.html file
    // and add a height (for example 100%) to it, else the map won't be visible
    // <ion-content>
    //  <div #map id="map" style="height:100%;"></div>
    // </ion-content>

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

    // create LatLng object
    let ionic: LatLng = location;

    // create CameraPosition
    let position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    map.moveCamera(position);

    // create new marker
    let markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };

    map.addMarker(markerOptions)
      .then((marker: Marker) => {
          marker.showInfoWindow();
        });
  }
  
}
