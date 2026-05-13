// @
import { inject, Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.addLangs(['en-US', 'es-MX', 'gn-PY']);
    this.translate.setFallbackLang('en-US');

    const browserLang = this.translate.getBrowserLang();
    const lang = browserLang?.match(/es|en/) ? browserLang : 'en-US';

    this.translate.use(lang);
  }
}
