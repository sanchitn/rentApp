import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraytoStingpipe'
})
export class ArraytoStingpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var result =value.map(function(item){
   
      return item.item_name.toUpperCase()

    });
    
    return result.toString()

  }

}
