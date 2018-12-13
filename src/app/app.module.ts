import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { YoutubePage } from '../pages/youtube/youtube';
import { SignalsPage} from "../pages/signals/signals";
import { ChatPage } from '../pages/chat/chat';
import { UsersPage} from "../pages/users/users";
import { SettingPage} from "../pages/setting/setting";
import { PodcastPage} from "../pages/podcast/podcast";
import { DocumentPage} from "../pages/document/document";
import { Mt4Page} from "../pages/mt4/mt4";
import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home";

import { ChatPageModule} from "../pages/chat/chat.module";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmojiProvider } from '../providers/emoji';
import { ImagesProvider } from '../providers/images/images';
import { PreloaderProvider } from '../providers/preloader/preloader';
import { SocketsProvider } from '../providers/sockets/sockets';
import {config} from "../configurations/configurations";
import {SocketIoModule} from "ng-socket-io";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    YoutubePage,
    SignalsPage,
    UsersPage,
    SettingPage,
    PodcastPage,
    DocumentPage,
    Mt4Page,
    TabsPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SocketIoModule.forRoot(config.io),
    ChatPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YoutubePage,
    SignalsPage,
    UsersPage,
    SettingPage,
    PodcastPage,
    DocumentPage,
    Mt4Page,
    TabsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    ImagesProvider,
    PreloaderProvider,
    SocketsProvider
  ]
})
export class AppModule {}
