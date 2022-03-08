import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.scss']
})
export class TemplateOutletComponent implements OnInit {
  @ViewChild('cardTemplate') cardTemplate:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate:TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  title = 'ngTemplateOutlet Example';

  mode ="card"
 
  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
 
  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];
 

  get template() {
 
    if(this.mode=="list") return this.listTemplate
    return this.cardTemplate
  }
}  
 


