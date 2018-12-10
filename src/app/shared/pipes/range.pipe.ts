import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:"range"
})
export class RangePipe implements PipeTransform{
  transform(items, attr, min, max) {
      var range = [],
          min:any=parseFloat(min),
          max:any=parseFloat(max);
      if(items){
        for (var i=0, l=items.length; i<l; ++i){
            var item = items[i];
            if(item[attr]<=max && item[attr]>=min){
                range.push(item);
            }
        }
      }
      return range;
  };
}
