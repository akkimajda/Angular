// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'http://localhost:8089';

  constructor(private http: HttpClient) {}

  callSecure(): Observable<any> {
    // NE PAS mettre d’Authorization ici : le Keycloak interceptor s’en charge
    return this.http.get(`${this.baseUrl}/api/test`, { responseType: 'text' });
  }
}
