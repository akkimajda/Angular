// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent {
  loading = false;
  result?: string;
  error?: string;

  constructor(private api: ApiService) {}

  callApi() {
    this.loading = true;
    this.result = undefined;
    this.error = undefined;

    this.api.callSecure()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => { this.result = typeof res === 'string' ? res : JSON.stringify(res); },
        error: (err) => {
          // message lisible
          const msg = err?.error ?? err?.message ?? 'Erreur inconnue';
          this.error = `Erreur : ${msg}`;
          console.error('API error', err);
        }
      });
  }
}
