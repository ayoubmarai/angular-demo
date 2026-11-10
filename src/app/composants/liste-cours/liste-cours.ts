import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { UpperCasePipe } from '@angular/common';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../pipes/tronquer-pipe';
import { Cours, COURS } from '../../donnees/cours';
import { RouterLink } from '@angular/router';
import { Catalogue } from '../../services/catalogue';

@Component({
  imports: [
    FormsModule,
    FiltreCoursPipe,
    TriCoursPipe,
    UpperCasePipe,
    PlacesRestantesPipe,
    TronquerPipe,
    RouterLink,
  ],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCoursComponent {
  @Output() coursSelectionne = new EventEmitter<Cours>();
  private catalogue = inject(Catalogue);
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';
  coursActif: Cours | null = null;
  cours = this.catalogue.lister();

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}
