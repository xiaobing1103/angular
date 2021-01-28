import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lcUppercase'
})
export class LcUppercasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(value=="老陈"){
      console.log(args)
      return value = "大帅哥" +value +args[1]
    }
    
      return value.toUpperCase();
  }
}
