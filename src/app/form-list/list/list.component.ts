import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/model/profile.model';
import { Details } from '../models/details.model';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  DetailsList= [] as Details[];

  constructor(private detatilsService: DetailsService) { }

  ngOnInit(): void {
    this.detatilsService.details$.subscribe((newData) => {
      this.addDetails(newData);
    });
    this.detatilsService.editedDetails$.subscribe((newData) => {
      this.editDetails(newData);
    });
  }

  DetailsTrack(index: number, profile: Details ): number {
    return profile.id;
  }

  addDetails(newData: Details): void {
    this.DetailsList.push(newData);
  }

  editDetails(newData: Details): void {
    let temp = this.DetailsList.findIndex((ele) => ele.id === newData.id);
    this.DetailsList[temp] = newData;
  }

  onEdit(oldData: Details) {
    this.detatilsService.sendDetailsToEdit(oldData);
  }

  sendDetailsToEdit(id: number, oldData: Details) {
    this.detatilsService.sendDetailsToEdit(oldData);
  }

  onDelete(id : number) : Details[]{
    return this.DetailsList.splice(id, 1);
  }
}
