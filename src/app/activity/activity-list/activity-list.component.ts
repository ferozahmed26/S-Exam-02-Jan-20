import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../shared/services';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities = [];

  constructor(private as:ActivityService) { }

  ngOnInit() {
    this.as.markAsRead();
    const list = this.as.getActivities();
    let resultArr = {};
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      element.recordedAt = element.recordedAt ? new Date(element.recordedAt).toLocaleString():'';
      if (resultArr.hasOwnProperty(element.id)) {
        resultArr[element.id].push(element);
      } else {
        resultArr[element.id] = [];
        resultArr[element.id].push(element);
      }
      
    }
    console.log(resultArr);
    this.activities.length = 0;
    this.activities = Object.values(resultArr);
    

  }

}
