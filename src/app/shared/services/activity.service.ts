import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { element } from 'protractor';

@Injectable()
export class ActivityService {

    public totalNotificaitons: number = 0;

    public notify$ = new Subject<void>();

    private activities = [];

    constructor() { 
        if (localStorage.getItem('activities')) {
            this.activities = JSON.parse(localStorage.getItem('activities'))
        }
        const m = this.activities.filter(elm=> {
            return elm.state == 0
        });
        this.totalNotificaitons = m.length;
    }

    public getActivities() {
        return this.activities;
    }

    public addActivity(acitivity) {        
        acitivity.recordedAt = new Date();
        acitivity.state = 0;
        this.activities.push(acitivity);
        this.totalNotificaitons += 1;
        localStorage.setItem('activities', JSON.stringify(this.activities))
        this.notify$.next();
        
        return true;
    }

    public markAsRead() {
        this.activities.map(elm=> {
            elm.state = 1;
        })
        this.totalNotificaitons = 0;
        localStorage.setItem('activities', JSON.stringify(this.activities))
        this.notify$.next();
    }
}
