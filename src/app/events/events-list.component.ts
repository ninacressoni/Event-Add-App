import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service"


declare let toastr: any
// this just let TS know that this variable is in scope already 
// declared somewhere else;

@Component ({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div class="col-sm-5" *ngFor="let event of events">    
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
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
    
    constructor(private eventService: EventService, 
        private toastr: ToastrService ) {
    }


    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName: any) {
        this.toastr.success(eventName)
    }
}