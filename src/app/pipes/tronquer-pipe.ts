import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer',
})
export class TronquerPipe implements PipeTransform {
  transform(titre: string, max: number = 10): string {
    let i = 0;
    let result = "";
    while(i < max && i < titre.length){
      result += titre[i];
      i++
    }
    if(i == max)
      result += "..."
    return result

  }
}
