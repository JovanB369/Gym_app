import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  view: CalendarView = CalendarView.Week;

  constructor() {}

  ngOnInit() {
  
  }
    addEvent(){

    }

    reserveSpot(clickedEvent: CalendarEvent<any>): void {
      // Logic to reserve a spot for a workout event
      // This could involve checking availability and limiting reservations
      // Use the `clickedEvent` parameter as the event that was clicked.
    }

  }
