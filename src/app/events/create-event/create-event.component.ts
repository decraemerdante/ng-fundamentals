import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    console.log(formValues);
  }
}
