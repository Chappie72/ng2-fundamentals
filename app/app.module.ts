import { NgModule } from '@angular/core'
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { NavBarComponent } from "./nav/navbar.component";

import { 
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
 } from './events/index'

import { EventsAppComponent } from "./events-app.component";
import { Error404Component } from "./errors/404.component";

import { ToastrService } from "./common/toastr.service";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";

import { AuthService } from "./user/auth.service";

import { appRoutes } from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        NavBarComponent,
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
        ],
    providers: [
        EventService,
        EventRouteActivator,
        EventListResolver,
        ToastrService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule{}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}