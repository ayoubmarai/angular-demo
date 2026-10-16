import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from '../composants/liste-cours/liste-cours';

@Pipe({
  name: 'filtreCategorie',
})
export class FiltreCategoriePipe implements PipeTransform {
  transform(cours: Cours[], categorie: string): Cours[] {
    if(!categorie) return cours;
    console.log(cours)
    console.log(cours.filter(c => c.categorie.toLowerCase().includes(categorie.toLowerCase())))
    return cours.filter(c => c.categorie.toLowerCase().includes(categorie.toLowerCase()));
  }
}
