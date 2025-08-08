// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Frontend Auth (Angular) ✅</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
export default AppComponent;
