// src/app/keycloak/keycloak-init.factory.ts
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak() {
  const platformId = inject(PLATFORM_ID);
  // ⛔️ Sur le serveur : ne pas initialiser Keycloak
  if (isPlatformServer(platformId)) {
    return () => Promise.resolve(true);
  }

  const keycloak = inject(KeycloakService);
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180', // adapte si besoin
        realm: 'escale-maroc',        // adapte à ton realm
        clientId: 'escale-frontend',  // adapte à ton client
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: [],
    });
}
