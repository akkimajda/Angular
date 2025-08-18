// src/app/app.routes.ts
import { Routes } from '@angular/router';
import LayoutComponent from './layout.component';
import HomeComponent from './home/home.component';
import { PortCreateComponent } from './port/port-create.component';
import { PortListComponent } from './port/port-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'port/create', component: PortCreateComponent },
      { path: 'port/list', component: PortListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];


