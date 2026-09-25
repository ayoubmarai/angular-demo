import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tete } from './composants/tete/tete';
import { Pied } from './composants/pied/pied';
import { PiedPage } from './composants/pied-page/pied-page';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';

@Component({
  imports: [Tete, Pied, ListeCoursComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('demo');
}
