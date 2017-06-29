import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular2 Events</h1>
        <hr/>
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>{{event.date}}</div>
            <div>{{event.time}}</div>
            <div>\${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    </div>
    `
})

export class EventListComponent{
    event = {
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
}