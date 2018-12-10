import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"available"
})
export class AvailablePipe implements PipeTransform{
  transform(items, attr, status) {
      var response = [],
          status:any=status;
      if(items){
        for (var i=0, l=items.length; i<l; ++i){
            var item = items[i];
            if(status){
              if(item[attr] == status){
                  response.push(item);
              }
            }else{
              response.push(item);
            }
        }
      }
      return response;
  };
}
