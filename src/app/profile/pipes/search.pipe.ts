import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from '../models/profile.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Profile[], searchText: string): Profile[] {

    if(searchText?.length) {
      return value?.filter(profile => (profile.firstName + ' ' + profile.lastName).toString().toLowerCase().includes(searchText.trim().toLowerCase()));
    }
    else{
      return value;
    }
      
  }

}
