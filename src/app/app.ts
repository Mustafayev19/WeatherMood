import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { MainContent } from './components/main-content/main-content';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Navbar, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'WeatherMood';
  constructor(private translate: TranslateService) {
    // Hansı dillərin mövcud olduğunu bildiririk
    translate.addLangs(['az', 'en']);
    // Standart dili təyin edirik
    translate.setDefaultLang('az');
  }
}
