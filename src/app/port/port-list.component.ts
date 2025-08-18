import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Port } from '../models/port.model';
import { PortService } from '../services/port.service';

@Component({
  selector: 'app-port-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.css']
})
export class PortListComponent implements OnInit {
  ports: Port[] = [];
  loading = false;
  errorMsg = '';

  // critères
  codePort = '';
  nomPort = '';
  localisation = '';

  // édition (modale)
  editing: Port | null = null;

  constructor(private portService: PortService) {}

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.loading = true;
    this.errorMsg = '';
    this.portService.searchPorts({
      codePort: this.codePort || undefined,
      nomPort: this.nomPort || undefined,
      localisation: this.localisation || undefined
    }).subscribe({
      next: (data) => { this.ports = data; this.loading = false; },
      error: (err) => { this.loading = false; this.errorMsg = 'Erreur lors de la recherche.'; console.error(err); }
    });
  }

  confirmDelete(code: string): void {
    if (!confirm(`Voulez-vous vraiment supprimer le port [${code}] ?`)) return;
    this.portService.deletePort(code).subscribe({
      next: () => this.search(),
      error: (err) => { alert('Suppression impossible'); console.error(err); }
    });
  }

  openEdit(p: Port): void {
    // clone pour édition (on n’autorise pas la modif du code)
    this.editing = { ...p };
  }

  saveEdit(): void {
    if (!this.editing) return;

    // sécuriser la capacité en nombre >= 0
    const capaciteNum = Number(this.editing.capacite);
    if (Number.isNaN(capaciteNum) || capaciteNum < 0) {
      alert('Capacité invalide (doit être un nombre ≥ 0).');
      return;
    }

    const payload = {
      nomPort: this.editing.nomPort?.trim() ?? '',
      localisation: this.editing.localisation?.trim() ?? '',
      capacite: capaciteNum
    };

    this.portService.updatePort(this.editing.codePort, payload).subscribe({
      next: () => { this.editing = null; this.search(); },
      error: (err) => { alert('Modification impossible'); console.error(err); }
    });
  }

  cancelEdit(): void { this.editing = null; }

  // pour *ngFor performance (facultatif)
  trackByCode(_: number, p: Port) { return p.codePort; }

  // helper: forcer 5 majuscules dans le filtre code (UX)
  onCodeFilterInput(): void {
    if (!this.codePort) return;
    const up = this.codePort.toUpperCase().slice(0, 5);
    if (this.codePort !== up) this.codePort = up;
  }
}
