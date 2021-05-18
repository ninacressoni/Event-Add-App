import { Component } from "@angular/core";

@Component ({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    </div>
    ` 

    // when eventClick is fired on our event-thumbnail component, 
    // cal this handleEventClicked method on my component. (foo)
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '09/06/2021',
        time: '10:00 am (GMT-3)',
        price: 29.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data: any) {
        console.log('received:', data)
    }

}