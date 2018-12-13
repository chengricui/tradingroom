import {Component, ViewChild} from '@angular/core';

import { YoutubePage} from "../youtube/youtube";
import { SignalsPage} from "../signals/signals";
import {ChatPage} from "../chat/chat";
import { UsersPage} from "../users/users";
import { SettingPage} from "../setting/setting";
import { PodcastPage} from "../podcast/podcast";
import { DocumentPage} from "../document/document";
import {Mt4Page} from "../mt4/mt4";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  youtubeRoot = YoutubePage;
  signalsRoot = SignalsPage;
  chatRoot = ChatPage;
  usersRoot = UsersPage;
  settingRoot = SettingPage;
  podcastRoot = PodcastPage;
  documentRoot = DocumentPage;
  mt4Root = Mt4Page;

  constructor() {

  }

}
