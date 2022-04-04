import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Files } from '../../model/file.model';
import { ListService } from '../list-presenter/list.service';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss'],
  viewProviders: [ListService],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @Output() public deleteId: EventEmitter<number>;
  private _fileList: Files[];


  constructor(private _fls: ListService) {
    this.deleteId = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  viewFile(type: string, content: string) {
    this._fls.openFile(content, type);
  }

  deleteFile(id: number) {
    this.deleteId.emit(id);
  }



}
