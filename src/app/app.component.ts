import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  userId: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();

      var notificationOpenedCallback = (jsonData) => {

        console.log('The user is: ', this.userId);
        console.log('JSON : ', jsonData);

        if (this.userId) {
          var notificationObj = {
            contents: { en: "message body" },
            include_player_ids: [this.userId]
          };
          window["plugins"].OneSignal.postNotification(notificationObj,
            (successResponse) => {
              console.log("Notification Post Success:", successResponse);
            },
            (failedResponse) => {
              console.log("Notification Post Failed: ", failedResponse);
            }
          );
        }
      };
      var promptForPushNotificationsWithUserResponse = (jsonData) => {
        console.log('Not a bad thing: ', jsonData);
        console.log('promptForPushNotificationsWithUserResponse : ' + JSON.stringify(jsonData));
      };
      var notificationReceivedCallback = (jsonData) => {
        const receivedNotification = JSON.stringify(jsonData);
        console.log('notificationReceivedCallback : ', receivedNotification);
      };
      window["plugins"].OneSignal
        .startInit("dd0460a5-4dbd-4726-abf8-2d0f907eef30", "465187178023")
        .handleNotificationReceived(notificationReceivedCallback)
        .handleNotificationOpened(notificationOpenedCallback)
        .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.None)
        .endInit();

      window["plugins"].OneSignal
        .promptForPushNotificationsWithUserResponse(promptForPushNotificationsWithUserResponse)

      window["plugins"].OneSignal.getIds((ids) => {
        this.userId = ids.userId;
      });

    });

  }
}

