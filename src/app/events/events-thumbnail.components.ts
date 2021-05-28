import { Component, Input } from "@angular/core";


@Component ({
    selector: 'event-thumbnail', 
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2> {{event?.name}} </h2>
        <div>Date: {{event?.date}} </div>
        <div [ngStyle]="getStartTimeStyle()"  
        [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'" >(Morning Time)</span>
            <span *ngSwitchCase="'10:00 pm'" >(Night Time)</span>
            <span *ngSwitchDefault >(Normal Time)</span> 
        </div>
        <div>Price: {{event?.price}}  </div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}} </span>
            <span class="pad-left"> {{event?.location?.city}}, {{event?.location?.country}} </span>
        </div>

        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    //<button class="btn btn-primary" (click)="handleClickMe()" >Click Me!</button>

    // *ngIf="event?.location" | Checking to see is location is truthy

    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    
    `]


})

export class EventThumbnailComponent {
    @Input() event: any
    //@Output() eventClick = new EventEmitter()

    //handleClickMe() {
        //this.eventClick.emit(this.event.name)
   // }
   getStartTimeStyle() : any {
       if (this.event && this.event.time === '8:00 am')
        return {color: '#003300', 'font-weight': 'bold'}
       return {}
   }
}