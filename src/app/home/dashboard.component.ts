import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- HERO -->
    <section class="bg-light border-bottom py-5 mb-4">
      <div class="container">
        <h1 class="display-6 fw-semibold mb-1">Bienvenue 👋</h1>
        <p class="text-muted mb-0">Choisissez un espace pour commencer</p>
      </div>
    </section>

    <!-- CARTES -->
    <div class="container pb-5">
      <div class="row g-4">

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Visite Maritime</h5>
              <p class="card-text small text-muted">Gestion des visites.</p>
              <div class="d-grid gap-2">
                <a routerLink="/visit/create" class="btn btn-primary btn-sm">Créer AD</a>
                <a routerLink="/visit/list" class="btn btn-outline-primary btn-sm">Consulter Visite</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Navire</h5>
              <p class="card-text small text-muted">Gestion des navires.</p>
              <div class="d-grid gap-2">
                <a routerLink="/ship/create" class="btn btn-primary btn-sm">Créer Navire</a>
                <a routerLink="/ship/list" class="btn btn-outline-primary btn-sm">Consulter Navire</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Terminal</h5>
              <p class="card-text small text-muted">Gestion des terminaux.</p>
              <div class="d-grid gap-2">
                <a routerLink="/terminal/create" class="btn btn-primary btn-sm">Créer Terminal</a>
                <a routerLink="/terminal/list" class="btn btn-outline-primary btn-sm">Consulter Terminal</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Port</h5>
              <p class="card-text small text-muted">Gestion des ports.</p>
              <div class="d-grid gap-2">
                <a routerLink="/port/create" class="btn btn-primary btn-sm">Créer Port</a>
                <a routerLink="/port/list" class="btn btn-outline-primary btn-sm">Consulter Port</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class DashboardComponent {}
