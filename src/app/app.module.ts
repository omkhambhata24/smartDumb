import { DragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { Assessment1Module } from './assessment-1/assessment-1.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { AuthenticationInterceptor } from './core/helper/authentication.interceptor';
import { MVPModule } from './mvp/mvp.module';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipesModule } from './pipes/pipes.module';
import { ProfileModule } from './profile/profile.module';
import { DeletePopupComponent } from './shared/delete-popup/delete-popup.component';
import { SharedModule } from './shared/shared.module';





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
    PipesModule,
    CoreModule,
    ProfileModule,
    Assessment1Module,
    BrowserAnimationsModule,
    SharedModule,
    MVPModule,
    DragDropModule,
    
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
