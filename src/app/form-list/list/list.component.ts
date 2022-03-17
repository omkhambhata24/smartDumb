import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/model/profile.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  ProfileList= [] as Profile[];

  constructor() { }

  ngOnInit(): void {
  }

  profileTrack(index: number, profile: Profile ): number {
    return profile.id;
  }

}
