import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: number, args?: any): string {
   if (value >= .90){
     return 'A';
   }else if (value >= .80){
     return 'B'
   }else if (value >= .70){
     return 'C'
   }else if (value >= .60){
     return 'D'
   }else {
     return 'F'
   }
  }

}
