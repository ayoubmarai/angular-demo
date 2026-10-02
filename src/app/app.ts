import { Component, signal } from '@angular/core';
import { Tete } from './composants/tete/tete';
import { Pied } from './composants/pied/pied';
import { Cours, ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { DetailsCours } from './composants/details-cours/details-cours';

@Component({
  imports: [Tete, Pied, ListeCoursComponent, DetailsCours],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  coursSelectionne: Cours | null = null;
  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }
  protected readonly title = signal('demo');
}
