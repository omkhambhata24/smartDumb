import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: User[], searchText: string): User[] {

    if(searchText?.length) {
      return value?.filter(user => (user.name).toString().toLowerCase().includes(searchText.trim().toLowerCase()));
    }
    else{
      return value;
    }
      
  }

}

