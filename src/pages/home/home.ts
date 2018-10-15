import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
// import { OneSignal } from '@ionic-native/onesignal';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notifications: any[] = [];

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
    // constructor(private localNotifications: LocalNotifications, private platform: Platform, public navCtrl: NavController) {

    // this.platform.ready().then((ready) => {
    //   console.log('Ready or not: ', ready);
    //   this.localNotifications.getAll().then((notification) => {
    //     this.notifications = notification
    //     console.log('All notifications i have are: ', JSON.stringify(notification));
    //   })
    // });



    // window["plugins"].OneSignal.getAll().subscribe((result) => {
    //   console.log('Can i get a hell ya', result);
    // })
    // this.getAllNotifications();
    // constructor(private oneSignal: OneSignal, public navCtrl: NavController) {

    // this.oneSignal.startInit("dd0460a5-4dbd-4726-abf8-2d0f907eef30", "465187178023");
    // // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    // this.oneSignal.handleNotificationReceived().subscribe((results) => {
    //   // do something when notification is received
    //   console.log('in the received block', results);
    // });

    // this.oneSignal.handleNotificationOpened().subscribe(() => {
    //   // do something when a notification is opened
    //   console.log('in the opened block');
    // });

    // this.oneSignal.endInit();
  }


  // private getAllNotifications() {
  //   this.localNotifications.schedule([{
  //     id: 1,
  //     text: 'First ILocalNotification',
  //     data: { secret: 'First One' }
  //   }, {
  //     id: 5,
  //     text: 'Second ILocalNotification',
  //     data: { secret: 'Second one' }
  //   }]);
  // }


  goToWebpage() {
    const inabOptions: InAppBrowserOptions = {
      location: 'yes',//Or 'no' Whole upper url part
      hidden: 'no', //Or  'yes' 
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',//Android only ,shows browser zoom controls 
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'no',
      hideurlbar: 'yes',
      shouldPauseOnSuspend: 'no', //Android only 
      closebuttoncaption: 'X', //iOS only
      disallowoverscroll: 'no', //iOS only 
      toolbar: 'yes', //iOS only 
      enableViewportScale: 'no', //iOS only 
      allowInlineMediaPlayback: 'no',//iOS only 
      presentationstyle: 'pagesheet',//iOS only 
      fullscreen: 'yes',//Windows only
    };
    this.iab.create('https://www.youtube.com/', '_self', inabOptions)
  }
}
