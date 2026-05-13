import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonItem,
  IonFooter,
  IonAccordion,
  IonButton,
  IonAccordionGroup,
  IonText,
  IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
    IonItem,
    IonFooter,
    IonAccordion,
    IonAccordionGroup,
    IonButton,
    IonText,
    IonNote
  ],
})
export class HomePage {
  constructor() { }
}