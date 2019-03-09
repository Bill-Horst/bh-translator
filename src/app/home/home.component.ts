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
  servicesHeader;
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
    this.servicesHeader = langTrans.servicesHeader;
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
      servicesHeader: 'Japanese to English Tech Translations',
      servicesHeaderTop: 'Japanese to English',
      servicesHeaderBottom: 'Tech Translations',
      servicesP1: 'Japanese to English translation services on topics having to do with all things technology',
      servicesP2: 'All translation work done by a native English speaker from Japanese to English',
      servicesP3: 'Editing / proofreading and English transcription services also offered',
      yijHeader: 'Years Living/Working in Japan',
      techExpHeader: 'Years of Tech Industry Experience',
      transExpHeader: 'Years of Translation Experience',
      yijP1: 'More than six years living and working in Japan gaining invaluable insight into the nuances of the Japanese language and culture',
      techExpP1: 'Large tech-related vocabulary gained through many years of tech industry experience ranging from IT services to software engineering and testing to IoT and cloud services',
      transExpP1: 'Four years of experience with general and technical translation for companies in both Japan and the US ranging from video subtitles to government documents to mobile game localization',
      contactButton: 'Contact'
    },
    japanese: {
      homeHeader: 'ホーストビル',
      servicesHeader: '日→英テックの翻訳サービス',
      servicesHeaderTop: '日→英テックの',
      servicesHeaderBottom: '翻訳サービス',
      servicesP1: 'テックの全てについての日本語から英語の翻訳サービス',
      servicesP2: '日→英翻訳の全ては英語のネイティブスピーカーがやります',
      servicesP3: '書類の編集も英語の採録サービスも提供しています',
      yijHeader: '日本での生活と仕事の長年の経験',
      techExpHeader: '技術業界での長年の経験',
      transExpHeader: '翻訳業界での長年の経験',
      yijP1: '6年間以上日本に住んで働いていることで、日本語と日本文化のニュアンスについて非常に貴重な洞察が得られます',
      techExpP1: 'ITサービスからソフトウェアエンジニアリング、テスト、そしてIoTやクラウドサービスに至るまでの長年のテクノロジー業界での経験を通して得られた大規模なテクノロジー関連の語彙',
      transExpP1: 'ビデオサブタイトルから政府文書、モバイルゲームのローカライゼーションまで、日米両国の企業向けの一般および技術翻訳の4年間の経験',
      contactButton: '問い合わせ'
    }
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

}
