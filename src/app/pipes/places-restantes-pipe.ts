import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(places: number, seuil = 5): string {
    if(places == 0)
      return "Complet!"
    else if (places == 1)
      return "Derniere place!"
    else if (places >= 2 && places <= seuil)
      return "Peut de " + places + " places disponibles"
    else return places + " places disponibles"

  }
}
