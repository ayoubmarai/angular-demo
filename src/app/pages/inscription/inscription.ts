import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { COURS, Cours } from '../../donnees/cours';
import { Session } from '../../services/session';
import { nomComplet } from '../../validators/nom-complet';
import { Catalogue } from '../../services/catalogue';
import { Inscriptions } from '../../services/inscriptions';
@Component({
  selector: 'app-inscription',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './inscription.html',
  // providers: [Inscriptions],
  styleUrl: './inscription.css',
})
export class Inscription implements OnInit {
  private session = inject(Session);
  inscriptions = inject(Inscriptions);
  @Input() id = ''; // reçoit le :id de l'URL
  confirmation = '';
  form = new FormGroup({
    nom: new FormControl('', [Validators.required, nomComplet]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.pattern(/^[0-9]{8}$/)]),
    niveau: new FormControl('', [Validators.required]),
    motivation: new FormControl('', [Validators.required, Validators.minLength(20)]),
    conditions: new FormControl(false, [Validators.requiredTrue]),
  });
  private catalogue = inject(Catalogue);
  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
  }
  ngOnInit() {
    // Pré-remplit le nom avec celui de l'utilisateur connecté
    this.form.patchValue({ nom: this.session.nom() });
  }

  get nom() {
    return this.form.controls.nom;
  }
  get email() {
    return this.form.controls.email;
  }
  get telephone() {
    return this.form.controls.telephone;
  }
  get niveau() {
    return this.form.controls.niveau;
  }
  get motivation() {
    return this.form.controls.motivation;
  }
  get conditions() {
    return this.form.controls.conditions;
  }

  envoyer() {
    const cours = this.cours;
    if (this.form.invalid || !cours) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    this.inscriptions.ajouter({
      coursId: cours.id,
      nom: v.nom ?? '',
      email: v.email ?? '',
      niveau: v.niveau ?? '',
      date: new Date(),
    });

    console.log("Inscri: ", this.inscriptions.liste())
    this.confirmation = `Merci ${v.nom} ! Votre inscription à « ${cours.titre} » est
enregistrée.`;
    this.form.reset();
  }
}
