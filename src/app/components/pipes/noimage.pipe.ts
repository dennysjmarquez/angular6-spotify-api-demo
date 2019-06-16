import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[], index: number = 0): string {

    (index < 0 || isNaN(index)) && (index = 0);

    return images && Object.prototype.toString.call(images).slice(8, -1) == 'Array' && images.length && index < images.length
      ? images[index].url
      : 'assets/img/noimage.png';

  }

}
