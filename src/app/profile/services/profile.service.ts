import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileToEdit: Subject<Profile> = new Subject<Profile>();

  apiCall={} as string;

  constructor(private http: HttpClient) {
     this.apiCall = environment.baseURL;
   }


   saveProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiCall}/profile/`, profile);
   }

   getProfileList(profile: Profile): Observable<Profile> {
     return this.http.get<Profile>(`${this.apiCall}/profile/`);
   }

   getDepartment(profile: Profile): Observable<Profile> {
     return this.http.get<Profile>(`${this.apiCall}/profile/`)
   }

   sendProfiletoEdit(profile: Profile) {
     this.profileToEdit.next(profile)
   }
}
