import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
    declarations: [
        SidebarComponent
    ],

    imports: [
        CommonModule,
        CoreRoutingModule,
    ],

    exports: [
        SidebarComponent
    ]
})

export class CoreModule { }