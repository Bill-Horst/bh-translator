import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  language: string = this.languageService.getLanguage();
  languageSubscription: any;

  contactHeader;
  emailHeader;
  addressHeader;
  phoneHeader;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.triggerLanguageChange.subscribe((language: string) => {
      this.setTranslations(language);
      this.language = language;
    });
    this.setTranslations(this.language);
  }

  onSubmit() {
  }

  setTranslations(language: string) {
    let langTrans = this.translations[language];

    this.contactHeader = langTrans.contactHeader;
    this.emailHeader = langTrans.emailHeader;
    this.addressHeader = langTrans.addressHeader;
    this.phoneHeader = langTrans.phoneHeader;
  }

  private translations: {} = {
    english: {
      contactHeader: 'Contact Bill Horst - Tech Translator',
      emailHeader: 'Email',
      addressHeader: 'Address',
      phoneHeader: 'Phone'
    },
    japanese: {
      contactHeader: 'ホースト　ビル・IT翻訳者の連絡先',
      emailHeader: 'メール',
      addressHeader: '住所',
      phoneHeader: '電話'
    }
  }

}
