// @
import { inject, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/angular/standalone';

// IONICONS
import { addIcons } from 'ionicons';
import { mail, shieldCheckmark } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private translate = inject(TranslateService);

  constructor() {
    addIcons({
      'mail': mail,
      'shield-checkmark': shieldCheckmark,
    });
  }

  ngOnInit(): void {
    this.translate.addLangs(['en-US', 'es-MX', 'gn-PY']);
    this.translate.setFallbackLang('en-US');

    const browserLang = this.translate.getBrowserLang();
    const lang = browserLang?.match(/es|en/) ? browserLang : 'en-US';

    this.translate.use(lang);
  }
}
