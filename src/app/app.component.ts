// @
import { inject, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/angular/standalone';

// IONICONS
import { addIcons } from 'ionicons';
import {
  mail,
  shieldCheckmark,
  home
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
  ],
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);

  constructor() {
    // Register required icons for the application
    addIcons({
      'mail': mail,
      'shield-checkmark': shieldCheckmark,
      'home': home
    });

    // Define supported languages for SSSPOS
    this.translate.addLangs(['en-US', 'es-MX', 'gn-PY']);

    // Set fallback language if a key is missing in the current language
    this.translate.setFallbackLang('en-US');
  }

  ngOnInit(): void {
    const browserLang = this.translate.getBrowserLang(); // e.g., 'es'

    let langToUse = 'en-US';

    // Simplified language detection logic
    if (browserLang?.includes('es'))
      langToUse = 'es-MX';
    else if (browserLang?.includes('gn'))
      langToUse = 'gn-PY';

    // Load the translation file and set the active language
    this.translate.use(langToUse);
  }
}