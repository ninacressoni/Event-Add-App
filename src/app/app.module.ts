import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.components';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
