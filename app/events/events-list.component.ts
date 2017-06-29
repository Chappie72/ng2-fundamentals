import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html' 
})

export class EventListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '06/07/2017',
        time: '10:00am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Auckland',
            country: 'New Zealand'
        }
    }

    handleEventClicked(data){
        console.log('recieved: ', data)
    }
}