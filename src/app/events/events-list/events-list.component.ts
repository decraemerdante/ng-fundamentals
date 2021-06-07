import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: []
})
export class EventsListComponent implements OnInit {

  events: any[]

  constructor(private eventService : EventService, 
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data["events"]
  }

  handleThumbnailClick(name){
      this.toastr.success(name);
  }
 
}
