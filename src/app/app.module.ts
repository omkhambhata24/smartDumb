import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PipesModule } from './pipes/pipes.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { ProfileModule } from './profile/profile.module';
import { Assessment1Module } from './assessment-1/assessment-1.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsComponent } from './artists/artists.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DeletePopupComponent } from './shared/delete-popup/delete-popup.component';
import { SharedModule } from './shared/shared.module';
import { MVPModule } from './mvp/mvp.module';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    ArtistsComponent,
    DeletePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PipesModule,
    CoreModule,
    ReactiveFormsModule,
    ProfileModule,
    Assessment1Module,
    BrowserAnimationsModule,
    OverlayModule,
    SharedModule,
    MVPModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
