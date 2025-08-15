// src/app/services/port.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Port } from '../models/port.model';

@Injectable({ providedIn: 'root' })
export class PortService {
  private readonly baseUrl = 'http://localhost:8089/api/ports';

  constructor(private http: HttpClient) {}

  /** Création (réponse texte) */
  createPort(port: Port): Observable<string> {
    // IMPORTANT : responseType 'text' pour éviter le JSON.parse error
    return this.http.post(this.baseUrl, port, { responseType: 'text' as const });
  }

  /** Recherche (JSON) */
  searchPorts(criteria: Partial<Port>): Observable<Port[]> {
    return this.http.get<Port[]>(this.baseUrl, { params: criteria as any });
  }

  /** Mise à jour (JSON) */
  updatePort(codePort: string, data: Omit<Port, 'codePort'>): Observable<Port> {
    return this.http.put<Port>(`${this.baseUrl}/${codePort}`, data);
  }

  /** Suppression (pas de corps) */
  deletePort(codePort: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${codePort}`);
  }
}
