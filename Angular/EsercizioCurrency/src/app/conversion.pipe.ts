import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    let mult = parseFloat(args[0]);
    return mult * value;
  }
}