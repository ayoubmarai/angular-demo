import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURS, Cours } from '../../donnees/cours';
import { DetailsCours } from '../../composants/details-cours/details-cours';

@Component({
selector: 'app-page-detail',
imports: [DetailsCours, RouterLink],
templateUrl: './page-detail.html',
styleUrl: './page-detail.css',
})
export class PageDetail {
// Rempli automatiquement avec le :id de l'URL (c'est une chaîne de caractères)
@Input() id = '';
get cours(): Cours | undefined {
return COURS.find(c => c.id === Number(this.id));
}
}