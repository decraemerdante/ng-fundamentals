import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventsListComponent,EventDetailComponent, CreateEventComponent, EventThumbnailComponent} from './events/index';
import { EventsAppComponent } from './events/events-app.component';

import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import {appRoutes} from './routes';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { EventRouteActivatorService } from './events/event-detail/event-route-activator.service';
import { EventsListResolverService } from './events/events-list/events-list-resolver.service';

@NgModule({
  declarations: [    
    EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavbarComponent, EventDetailComponent, CreateEventComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService,
    {
      provide :'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}
