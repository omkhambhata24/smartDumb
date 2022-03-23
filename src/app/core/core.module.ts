import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        SidebarComponent,
        LoginComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ],

    exports: [
        SidebarComponent
    ]
})

export class CoreModule { }