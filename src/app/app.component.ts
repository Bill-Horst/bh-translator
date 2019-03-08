import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private currentYear = new Date().getFullYear();

  copyrightMessage = `Copyright Bill Horst ${this.currentYear}`;
}
