import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  language: string = this.languageService.getLanguage();
  languageSubscription: Subscription;

  homeNav: string;
  contactNav: string;
  aboutNav: string;
  workNav: string;
  ratesNav: string;

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.triggerLanguageChange.subscribe((language: string) => {
      this.setTranslations(language);
      this.language = language;
    });
    this.setTranslations(this.language);
  }

  onClose() {
    this.closeSidenav.emit();
  }

  newLanguageChosen(language: string) {
    this.languageService.setLanguage(language);
  }

  setTranslations(language: string) {
    let langTrans = this.translations[language];

    this.homeNav = langTrans.homeNav;
    this.contactNav = langTrans.contactNav;
    this.aboutNav = langTrans.aboutNav;
    this.workNav = langTrans.workNav;
    this.ratesNav = langTrans.ratesNav;
  }

  private translations: {} = {
    english: {
      homeNav: 'Home',
      contactNav: 'Contact',
      aboutNav: 'About',
      workNav: 'Work',
      ratesNav: 'Rates'
    },
    japanese: {
      homeNav: 'ホーム',
      contactNav: 'お問い合わせ',
      aboutNav: '翻訳者の紹介',
      workNav: 'ワーク',
      ratesNav: 'お値段'
    }
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

}
