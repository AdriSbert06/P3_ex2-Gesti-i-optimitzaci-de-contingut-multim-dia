import { Routes } from '@angular/router';

import { IniciComponent } from './app/inici/inici.component';
import { CardsComponent } from './app/cards/cards.component';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { MultimediaComponent } from './app/multimedia/multimedia.component';

export const routes: Routes = [
  {
    path: 'home',
    component: IniciComponent,
    pathMatch: 'full'
  },
  {
    path: 'cartes',
    component: CardsComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'multimedia',
    component: MultimediaComponent
  }
];