/* Sort Pipe, fuente: https://gist.github.com/chandermani/e721cab947440d6a3863 */

import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'lodash';

@Pipe( {
  name: 'orderBy'
} )
export class OrderByPipe implements PipeTransform {
  transform(value: Array<any>, field: string): any {
    if(value == null) {
      return null;
    }
    if (field.startsWith("-")) {
      field = field.substring(1);
      if (typeof value[field] === 'string' || value[field] instanceof String) {
        return [...value].sort((a, b) => b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => b[field] - a[field]);
    }
    else {
      if (typeof value[field] === 'string' || value[field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
  }
}
