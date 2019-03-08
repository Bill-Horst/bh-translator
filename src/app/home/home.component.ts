import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private language: string = this.languageService.getLanguage();
  languageSubscription: Subscription;

  homeHeader;
  servicesHeader;
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
    });
    this.setTranslations(this.language);
  }

  setTranslations(language: string) {
    let langTrans = this.translations[language];

    this.homeHeader = langTrans.homeHeader;
    this.servicesHeader = langTrans.servicesHeader;
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
      servicesP1: 'Japanese to English translation services on topics having to do with all things technology.',
      servicesP2: 'All translation work done by a native English speaker from Japanese to English.',
      servicesP3: 'Editing / proofreading and English transcription services also offered.',
      yijHeader: 'Years Living/Working in Japan',
      techExpHeader: 'Years of Tech Industry Experience',
      transExpHeader: 'Years of Translation Experience',
      yijP1: 'More than six years living and working in Japan gaining invaluable insight into the nuances of the Japanese language and culture.',
      techExpP1: 'Large tech-related vocabulary gained through many years of tech industry experience ranging from IT services to software engineering and testing to IoT and cloud services.',
      transExpP1: 'Four years of experience with general and technical translation for companies in both Japan and the US ranging from video subtitles to government documents to mobile game localization.',
      contactButton: 'Contact'
    },
    japanese: {
      homeHeader: 'BHJETSへようこそ',
      servicesHeader: 'JJJ Japanese to English Translations with Technology Specialization',
      servicesP1: 'JJJ Japanese to English translation services on topics having to do with all things technology.',
      servicesP2: 'JJJ Apart from translation, I can also offer editing / proofreading and English transcription.',
      servicesP3: 'JJJ All work done by a native English speaker from Japanese to English.',
      yijHeader: '倍の経験',
      techExpHeader: '倍の品質',
      transExpHeader: '倍の速さ',
      yijP1: '日本語でMore than six years living and working in Japan gaining invaluable insight into the nuances of the language and culture.',
      techExpP1: '日本語でMany years of tech industry experience from IT services to software engineering and testing helped to amass a large tech-related vocabulary.',
      transExpP1: '日本語でGeneral and technical translation experience for companies in both Japan and the US ranging from video subtitles to government documents to mobile game localization.',
      contactButton: '問い合わせ'
    }
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

}
