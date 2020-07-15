import { Component } from '@angular/core';


@Component({
  selector: 'event-details',
  // templateUrl: `app/event-details.component.html`
  template:`<div>Event: {{ event.name }}</div>
  <div>Date: {{event.date}}</div>
  <div>Time: {{event.time}}</div>
  <div>Address: {{event.location.address}}, {{event.location.City}},{{event.location.country}}</div>`,
})
export class EventDetailsComponent  {
    event = {name:'ngConf 2025', date:'3/1/2025', time: '8am', 
location: {address: '123 Main St', City: 'Salt Lake City, UT', country:'USA'}}
}
