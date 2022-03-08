import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() itemTemplate: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

}
