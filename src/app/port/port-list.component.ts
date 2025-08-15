import { Component } from '@angular/core';
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
export class PortListComponent {
  ports: Port[] = [];
  loading = false;

  // critères
  codePort = '';
  nomPort = '';
  localisation = '';

  // édition
  editing: Port | null = null;

  constructor(private portService: PortService) { this.search(); }

  search() {
    this.loading = true;
    this.portService.searchPorts({
      codePort: this.codePort || undefined,
      nomPort: this.nomPort || undefined,
      localisation: this.localisation || undefined
    }).subscribe({
      next: (data) => { this.ports = data; this.loading = false; },
      error: () => { this.loading = false; alert('Erreur lors de la recherche'); }
    });
  }

  confirmDelete(code: string) {
    if (!confirm(`Voulez-vous vraiment supprimer le port [${code}] ?`)) return;
    this.portService.deletePort(code).subscribe({
      next: () => this.search(),
      error: () => alert("Suppression impossible")
    });
  }

  openEdit(p: Port) {
    // clone pour édition
    this.editing = { ...p };
  }

  saveEdit() {
    if (!this.editing) return;
    const { codePort, nomPort, localisation, capacite } = this.editing;
    this.portService.updatePort(codePort, { nomPort, localisation, capacite })
      .subscribe({
        next: () => { this.editing = null; this.search(); },
        error: () => alert("Modification impossible")
      });
  }

  cancelEdit() { this.editing = null; }
}
