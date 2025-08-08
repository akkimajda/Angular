// src/app/keycloak/keycloak-init.factory.ts
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180',   // <- port 8180 (comme ta capture)
        realm: 'escale-maroc',          // <- nom du realm visible dans l’URL
        clientId: 'escale-frontend',    // <- ton client front
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: [],
    });
}
