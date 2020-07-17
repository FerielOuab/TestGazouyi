import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CreateAccountComponent} from './create-account/create-account.component'
import {MyAccountComponent} from './my-account/my-account.component';
import {FormsModule} from '@angular/forms';
import { Camera } from '@ionic-native/Camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [AppComponent, CreateAccountComponent, MyAccountComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
