// src/app/home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  // ✅ template inline pour éliminer l'erreur de fetch de ./home.component.html
  template: `<h2>Home OK ✅</h2>`,
})
export default class HomeComponent {}
