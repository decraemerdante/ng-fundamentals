import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: []
})
export class EventsListComponent implements OnInit {

  events: any[]

  constructor(private eventService : EventService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(name){
      this.toastr.success(name);
  }
 
}
