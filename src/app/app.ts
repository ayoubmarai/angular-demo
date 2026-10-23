import { Component, inject, signal } from '@angular/core';
import { Tete } from './composants/tete/tete';
import { Pied } from './composants/pied/pied';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { DetailsCours } from './composants/details-cours/details-cours';
import { Cours } from './donnees/cours';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Session } from './services/session';

@Component({
  imports: [
    Tete,
    Pied,
    ListeCoursComponent,
    DetailsCours,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  coursSelectionne: Cours | null = null;
  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }

  session = inject(Session);
  private router = inject(Router);
  deconnecter() {
    this.session.deconnecter();
    this.router.navigateByUrl('/');
  }
  protected readonly title = signal('demo');
}
