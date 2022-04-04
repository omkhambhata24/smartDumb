import { Component, Input, OnInit } from '@angular/core';
import { Files } from '../../model/file.model';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss']
})
export class ListPresentationComponent implements OnInit {

  @Input() public set fileList(value: Files[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): Files[] {
    return this._fileList;
  }

  private _fileList: Files[];


  constructor() { }

  ngOnInit(): void {
  }

}
