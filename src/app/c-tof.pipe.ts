import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cTof'
})
export class CTofPipe implements PipeTransform {

  transform(value: number, type:'f'|'c'): string {
    if (type === 'f') {
      return `${value}F`;
    } else {
      return String((5 / 9) * (value - 32));
    }
  }

}
