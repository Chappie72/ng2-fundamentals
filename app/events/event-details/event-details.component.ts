import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from "../shared/index";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles:[`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor:pointer }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: any
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() { 
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session:ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelNewSession() {
        this.addMode = false
    }

    
}