import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { DevicesPage } from '../pages/devices/devices';
import { LogsPage } from '../pages/logs/logs';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsCollisionPage } from '../pages/settings-collision/settings-collision';
import { SettingsRiderPage } from '../pages/settings-rider/settings-rider';
import { StatusPage } from '../pages/status/status';

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial'
import { Bluetooth } from '../providers/bluetooth';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainMenuPage,
    DevicesPage,
    LogsPage,
    SettingsPage,
    SettingsCollisionPage,
    SettingsRiderPage,
    ProgressBarComponent,
    StatusPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainMenuPage,
    DevicesPage,
    LogsPage,
    SettingsPage,
    SettingsCollisionPage,
    SettingsRiderPage,
    StatusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    Bluetooth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
