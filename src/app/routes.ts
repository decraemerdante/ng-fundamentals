import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventRouteActivatorService } from './events/event-detail/event-route-activator.service';
import { EventsListResolverService } from './events/events-list/events-list-resolver.service';
import { EventsListComponent } from './events/events-list/events-list.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',

    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
