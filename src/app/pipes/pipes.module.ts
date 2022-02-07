import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { CustomDirDirective } from './custom-dir/custom-dir.directive';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { HoverDirective } from './Hover/hover.directive';
import { CapitalPipe } from './capital-pipe/capital.pipe';
import { PipesRoutingModule } from './pipes-routing.module';


@NgModule({
  declarations: [
    PipesComponent,
    CustomDirDirective,
    PostsTableComponent,
    HoverDirective,
    CapitalPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule { }