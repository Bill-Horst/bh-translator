import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';
import { LanguageService } from './services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  language: string = this.languageService.getLanguage();
  languageSubscription: Subscription;

  resumeRibbon: string;

  copyrightMessage = `Copyright Bill Horst ${this.currentYear}`;

  private currentYear = new Date().getFullYear();

  constructor(private dialog: MatDialog, private overlay: Overlay, private languageService: LanguageService) { }

  ngOnInit() {
  this.languageSubscription = this.languageService.triggerLanguageChange.subscribe((language: string) => {
    this.setTranslations(language);
    this.language = language;
  });
    this.setTranslations(this.language);
  }

  public openResumeDialog() {
    const dialogRef = this.dialog.open(ResumeModalComponent, {
      data: { title: 'Resume' }
    });
  }

  setTranslations(language: string) {
    let langTrans = this.translations[language];

    this.resumeRibbon = langTrans.resumeRibbon;
  }

  private translations: {} = {
    english: {
      resumeRibbon: 'Resume'
    },
    japanese: {
      resumeRibbon: '履歴書'
    }
  }

}
