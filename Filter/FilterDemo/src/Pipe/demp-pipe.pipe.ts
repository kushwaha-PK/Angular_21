import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dempPipe',
  standalone: true
})
export class DempPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
