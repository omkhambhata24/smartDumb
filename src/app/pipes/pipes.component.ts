import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  
  presentDate = new Date(); 
 

  constructor() { }

  ngOnInit(): void {
  }

}
