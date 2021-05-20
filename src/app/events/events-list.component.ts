import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component ({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div class="col-sm-5" *ngFor="let event of events">    
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    ` 
    //(eventClick)="handleEventClicked($event)"
    // when eventClick is fired on our event-thumbnail component, 
    // cal this handleEventClicked method on my component. (foo)
})

export class EventsListComponent implements OnInit{
    events: any[] = [];
    
    constructor(private eventService: EventService) {
    }


    ngOnInit() {
        this.events = this.eventService.getEvents()
    }
}