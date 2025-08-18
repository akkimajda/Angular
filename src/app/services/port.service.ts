import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Port } from '../models/port.model';
import { environment } from '../../environements/environement';

@Injectable({ providedIn: 'root' })
export class PortService {
  private readonly baseUrl = `${environment.apiBaseUrl}/api/ports`;

  constructor(private http: HttpClient) {}

  /** Création (réponse texte) */
  createPort(port: Port): Observable<string> {
    return this.http.post(this.baseUrl, port, { responseType: 'text' as const });
  }

  /** Recherche par critères */
  searchPorts(criteria: Partial<Pick<Port, 'codePort'|'nomPort'|'localisation'>>): Observable<Port[]> {
    const paramsObj: Record<string, string> = {};
    for (const [k, v] of Object.entries(criteria)) {
      if (v !== undefined && v !== null && String(v).trim() !== '') {
        paramsObj[k] = String(v);
      }
    }
    const params = new HttpParams({ fromObject: paramsObj });
    return this.http.get<Port[]>(this.baseUrl, { params });
  }

  /** Mise à jour (code non modifiable) */
  updatePort(codePort: string, data: Omit<Port, 'codePort'>): Observable<Port> {
    return this.http.put<Port>(`${this.baseUrl}/${codePort}`, data);
  }

  /** Suppression */
  deletePort(codePort: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${codePort}`);
  }
}
