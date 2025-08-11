// src/app/app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// ❗️IMPORTANT : pas de Keycloak ici, pas d'APP_INITIALIZER ici
export const config: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
