import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs/Subscription';
import { Certification } from './certification.model';
import { Membership } from './membership.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  private language: string = this.languageService.getLanguage();
  languageSubscription: Subscription;

  certs: Certification[] = [
    {
      name: 'JLPT N2',
      date: '2013',
      imagePath: 'jlpt_image.png',
      linkRef: 'https://www.jlpt.jp/e/'
    },
    {
      name: 'Microsoft - Programming in HTML5 with JavaScript and CSS3',
      date: '2017',
      imagePath: 'microsoft_image.png',
      linkRef: 'https://www.microsoft.com/en-us/learning/exam-70-480.aspx'
    },
    {
      name: 'AWS Certified Developer - Associate',
      date: '2017',
      imagePath: 'aws_image.jpg',
      linkRef: 'https://aws.amazon.com/certification/certified-developer-associate/'
    },
    {
      name: 'Java SE 8 Programmer I',
      date: '2017',
      imagePath: 'oracle_image.png',
      linkRef: 'https://education.oracle.com/java-se-8-programmer-i/pexam_1Z0-808'
    }
  ];

  memberships: Membership[] = [
    {
      name: 'American Translators Association',
      imagePath: 'ata_image.jpg',
      linkRef: 'https://education.oracle.com/java-se-8-programmer-i/pexam_1Z0-808'
    },
    {
      name: 'Colorado Translators Association',
      imagePath: 'cta_image.png',
      linkRef: 'https://education.oracle.com/java-se-8-programmer-i/pexam_1Z0-808'
    }
  ]

  introHeader;
  certHeader;
  memHeader;
  billIntroP1;
  billIntroP2;
  billIntroP3;

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
    this.introHeader = langTrans.introHeader;
    this.certHeader = langTrans.certHeader;
    this.memHeader = langTrans.memHeader;
    this.billIntroP1 = langTrans.billIntroP1;
    this.billIntroP2 = langTrans.billIntroP2;
    this.billIntroP3 = langTrans.billIntroP3;
  }

  private translations: {} = {
    english: {
      introHeader: 'Meet Bill',
      certHeader: 'Certifications',
      memHeader: 'Memberships',
      billIntroP1: 'Bill was born and raised in the United States and grew up multilingual. He moved to Japan in 2009 where he learned Japanese at work and began freelance translating professionally.',
      billIntroP2: 'He moved back to the United States in 2015 where he works as a software engineer, a tech writer, and freelance Japanese to English translator.',
      billIntroP3: 'He holds a handful of certifications ranging from programming languages to cloud technologies.'
    },
    japanese: {
      introHeader: 'ビルの紹介',
      certHeader: '資格',
      memHeader: 'メンバーシップ',
      billIntroP1: 'ビルはアメリカで生まれ多言語の生活して育ちました。２００９年に気まぐれに日本に引っ越して日本語の勉強初めて、フリーランス翻訳の仕事をした。',
      billIntroP2: '２０１５年にアメリカへ戻って今ソフトエアーエンジニアとテックのライターとフリーランスの日英翻訳者として働いています。',
      billIntroP3: 'プログラミングの言語からクラウドのテックまでの資格を持っています。'
    }
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

}

