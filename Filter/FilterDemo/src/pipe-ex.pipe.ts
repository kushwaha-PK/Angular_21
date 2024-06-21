import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeEx',
  standalone: true
})
export class PipeExPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): unknown {
    return value.filter(
      value => value[args[0]]== args[1]
    );
  }

}
