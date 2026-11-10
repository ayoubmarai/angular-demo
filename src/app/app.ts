import { Component, inject, signal } from '@angular/core';
import { Tete } from './composants/tete/tete';
import { Pied } from './composants/pied/pied';
import { Cours } from './donnees/cours';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Session } from './services/session';
import { Inscriptions } from './services/inscriptions';

@Component({
  imports: [
    Tete,
    Pied,
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
  inscriptions = inject(Inscriptions);
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
