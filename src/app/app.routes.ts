// src/app/app.routes.ts
import { Routes } from '@angular/router';
import LayoutComponent from './layout.component';
import HomeComponent from './home/home.component'; // on le garde si tu veux une route legacy
import { PortCreateComponent } from './port/port-create.component';
import { PortListComponent } from './port/port-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // ⚠️ le dashboard DOIT être la première route '' et il ne doit pas y avoir un 2e '' en dessous
      { path: '', loadComponent: () => import('./home/dashboard.component').then(m => m.DashboardComponent) },

      { path: 'port/create', component: PortCreateComponent },
      { path: 'port/list', component: PortListComponent },

      // (optionnel) si tu veux encore accéder à l’ancienne page d’accueil :
      // { path: 'home-legacy', component: HomeComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
