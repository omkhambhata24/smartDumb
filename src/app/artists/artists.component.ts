import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists = [
    
    'Artist 1 - Rabindranath Tagore',
    'Artist 2 - Kushwant Singh',
    'Artist 3 - Arundhati Roy',
    'Artist 4 - Amitav Ghosh',
    'Artist 5- William Shakespeare',
    'Artist 6 - Ted HUghes',
    'Artist 7 - John Keats',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop( event : CdkDragDrop<string[]> ): void {
    moveItemInArray(this.artists, event.previousIndex, event.currentIndex)
  }

}
