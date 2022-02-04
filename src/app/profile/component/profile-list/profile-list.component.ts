import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  @Input() profileList= {} as Profile[];

  @Output() profileToEdit: EventEmitter<Profile> = new EventEmitter<Profile>();
  @Output() profileToDelete: EventEmitter<number> = new EventEmitter<number>();


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  editProfile(profileToEdit: Profile) {
    this.profileService.sendProfiletoEdit(profileToEdit);
  }

  deleteProfile(id:number){
    this.profileToDelete.emit(id);
  }

}
