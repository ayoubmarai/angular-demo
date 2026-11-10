import { Injectable, signal } from '@angular/core';
import { InscriptionCours } from '../donnees/inscription-cours';

@Injectable({ providedIn: 'root' })
export class Inscriptions {
  constructor() {
    console.log('Service Inscriptions créé');
  }

  private _liste = signal<InscriptionCours[]>([]);
  readonly liste = this._liste.asReadonly();
  ajouter(inscription: InscriptionCours) {
    this._liste.update((l) => [...l, inscription]);
    console.log(this._liste())
  }
  annuler(coursId: number) {
    this._liste.update((l) => l.filter((i) => i.coursId !== coursId));
  }
  estInscrit(coursId: number): boolean {
    return this._liste().some((i) => i.coursId === coursId);
  }
}
