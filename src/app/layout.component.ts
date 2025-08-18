import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <header class="shadow-sm mb-4">
    <nav class="container py-3 d-flex gap-4">
      <a routerLink="/" class="fw-bold text-decoration-none">Frontend Auth (Angular) ✅</a>

      <div class="dropdown">
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">Visite Maritime</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item disabled" href="#">Créer AD (à venir)</a></li>
          <li><a class="dropdown-item disabled" href="#">Consulter Visite (à venir)</a></li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">Navire</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item disabled" href="#">Créer Navire (à venir)</a></li>
          <li><a class="dropdown-item disabled" href="#">Consulter Navire (à venir)</a></li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">Terminal</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item disabled" href="#">Créer Terminal (à venir)</a></li>
          <li><a class="dropdown-item disabled" href="#">Consulter Terminal (à venir)</a></li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">Port</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" routerLink="/port/create">Créer Port</a></li>
          <li><a class="dropdown-item" routerLink="/port/list">Consulter Port</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="container pb-5">
    <router-outlet></router-outlet>
  </main>
  `,
})
export default class LayoutComponent {}
