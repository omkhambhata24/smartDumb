import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesModule } from './pipes/pipes.module';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CoreModule } from './core/sidebar/core.module';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    ReactiveFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PipesModule,
    CoreModule,
    ReactiveFormsModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
