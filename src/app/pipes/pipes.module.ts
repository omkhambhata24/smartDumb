import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { CustomDirDirective } from './custom-dir/custom-dir.directive';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { HoverDirective } from './Hover/hover.directive';


@NgModule({
  declarations: [
    PipesComponent,
    CustomDirDirective,
    PostsTableComponent,
    HoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule { }