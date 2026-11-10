import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURS, Cours } from '../../donnees/cours';
import { DetailsCours } from '../../composants/details-cours/details-cours';
import { Catalogue } from '../../services/catalogue';

@Component({
  selector: 'app-page-detail',
  imports: [DetailsCours, RouterLink],
  templateUrl: './page-detail.html',
  styleUrl: './page-detail.css',
})
export class PageDetail {
  // Rempli automatiquement avec le :id de l'URL (c'est une chaîne de caractères)
  @Input() id = '';
  private catalogue = inject(Catalogue);
  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
  }
}
