import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:"search"
})
export class SearchPipe implements PipeTransform{
  transform(items, field, value:string) {
    if(!items) return [];
    if(!value) return items;

    return items.filter( str => {
        return str[field].toLowerCase().includes(value.toLowerCase());
    });
  };
}
