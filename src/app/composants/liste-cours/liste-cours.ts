import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCoursComponent {
  cours = [
    { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },
    { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15 },
    { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 },
    { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 },
  ];
}
