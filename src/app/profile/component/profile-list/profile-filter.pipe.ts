/*import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileListComponent } from './profile-list.component';

@Pipe({
  name: 'profileFilter'
})
export class ProfileFilterPipe implements PipeTransform {

  transform(ProfileList: Profile[], SearchTerm: string): Profile[] {
    
    if(!ProfileList || !SearchTerm) {
      return ProfileList;
    }

    return ProfileListComponent.filter(profile => profile.name.toLowerCase().indexOf(SearchTerm.toLowerCase()) !== -1);
  }

}*/
