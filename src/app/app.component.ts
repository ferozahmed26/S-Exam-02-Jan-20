import { Component, OnInit } from '@angular/core';
import { CustomerService, ActivityService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clientApp';
  notifications:number;
  constructor(private as: ActivityService){}
  ngOnInit(): void {
    this.notifications = this.as.totalNotificaitons;
    this.as.notify$.subscribe( res=> {
      this.notifications = this.as.totalNotificaitons;
    })
  }
}
