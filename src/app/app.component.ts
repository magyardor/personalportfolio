import { Component } from '@angular/core';
import { TranslationService } from './shared/_components/helper/translation.service';
import { locale as enLang } from './shared/_components/helper/languages/en';
import { locale as huLang } from './shared//_components/helper/languages/hu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private translationService: TranslationService
  ){
    this.translationService.loadTranslations(huLang, enLang);
  }
}
