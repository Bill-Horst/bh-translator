import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  language: string = this.languageService.getLanguage();
  languageSubscription: Subscription;

  homeHeader;
  servicesHeaderTop;
  servicesHeaderBottom;
  servicesP1;
  servicesP2;
  servicesP3;
  yijHeader;
  techExpHeader;
  transExpHeader;
  yijP1;
  techExpP1;
  transExpP1;
  contactButton;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.triggerLanguageChange.subscribe((language: string) => {
      this.setTranslations(language);
      this.language = language;
    });
    this.setTranslations(this.language);
  }

  setTranslations(language: string) {
    let langTrans = this.translations[language];

    this.homeHeader = langTrans.homeHeader;
    this.servicesHeaderTop = langTrans.servicesHeaderTop;
    this.servicesHeaderBottom = langTrans.servicesHeaderBottom;
    this.servicesP1 = langTrans.servicesP1;
    this.servicesP2 = langTrans.servicesP2;
    this.servicesP3 = langTrans.servicesP3;
    this.yijHeader = langTrans.yijHeader;
    this.techExpHeader = langTrans.techExpHeader;
    this.transExpHeader = langTrans.transExpHeader;
    this.yijP1 = langTrans.yijP1;
    this.techExpP1 = langTrans.techExpP1;
    this.transExpP1 = langTrans.transExpP1;
    this.contactButton = langTrans.contactButton;
  }

  private translations: {} = {
    english: {
      homeHeader: 'Bill Horst',
      servicesHeaderTop: 'Japanese to English',
      servicesHeaderBottom: 'Tech Translations',
      servicesP1: 'Japanese to English translation services on topics having to do with all things technology',
      servicesP3: 'General topic translations, editing / proofreading, and English transcription services also offered',
      servicesP2: 'All translation work done by a native English speaker from Japanese to English',
      yijHeader: 'Years Living/Working in Japan',
      techExpHeader: 'Years of Tech Industry Experience',
      transExpHeader: 'Years of Translation Experience',
      yijP1: 'More than six years living and working in Japan gaining invaluable insight into the nuances of the Japanese language and culture',
      techExpP1: 'Large tech-related vocabulary gained through many years of tech industry experience ranging from IT services to software engineering and testing to IoT and cloud services',
      transExpP1: 'Four years of experience with general and technical translation for companies in both Japan and the US ranging from video subtitles to government documents to mobile game localization',
      contactButton: 'Contact'
    },
    japanese: {
      homeHeader: 'ホースト　ビル',
      servicesHeaderTop: '日→英',
      servicesHeaderBottom: '情報技術翻訳サービス',
      servicesP1: 'IT関連の日本語から英語への翻訳。',
      servicesP2: '日→英翻訳は全て英語のネイティブスピーカーが担当。',
      servicesP3: '一般翻訳・添削・校正・英語のトランスクリプション（テープ起こし）も致します。',
      yijHeader: '日本での長年の生活と仕事を通して得られた経験',
      techExpHeader: 'IT業界での長年の経験',
      transExpHeader: '翻訳業界での長年の経験',
      yijP1: '6年以上日本に在住し、就業することで得られた日本文化と日本語のニュアンスについての貴重な理解',
      techExpP1: 'ITサービスからソフトウェアエンジニアリング、テスティング、そしてIoTやクラウドサービスに至るまでの長年のテクノロジー業界での経験を通して得た膨大なテクノロジー関連の用語に対しての理解',
      transExpP1: '動画の字幕から公文書、モバイルゲームのローカライゼーションまで、日米両国の企業向けの一般および技術翻訳。翻訳経験４年。',
      contactButton: 'お問い合わせ'
    }
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

}
