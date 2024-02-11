import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cTof'
})
export class CTofPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
