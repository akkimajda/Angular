import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Port } from '../models/port.model';
import { PortService } from '../services/port.service';

@Component({
  selector: 'app-port-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './port-create.component.html',
  styleUrls: ['./port-create.component.css']
})
export class PortCreateComponent {
  loading = false;
  port: Port = { codePort: '', nomPort: '', localisation: '', capacite: 0 };

  constructor(private portService: PortService) {}

  // Force 5 lettres majuscules
  onCodeChange(v: string) {
    this.port.codePort = v.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 5);
  }

  onSubmit(form: NgForm) {
    if (form.invalid || this.loading) return;

    this.loading = true;
    this.portService.createPort(this.port)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (msg: string) => {
          alert(msg || 'Port créé avec succès ✅');
          form.resetForm();
          this.port = { codePort: '', nomPort: '', localisation: '', capacite: 0 };
        },
        error: (err) => {
          console.error('Erreur création port', err);
          // affichage propre du message d'erreur
          const msg = (typeof err?.error === 'string' && err.error) || err?.message || 'Erreur inconnue';
          alert('❌ Erreur lors de la création : ' + msg);
        }
      });
  }
}
