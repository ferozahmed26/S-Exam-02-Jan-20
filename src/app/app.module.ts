import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/modules';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomerService, ActivityService } from './shared/services';
import { CustomerModule } from './customer/customer.module';
import { ActivityModule } from './activity/activity.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    CustomerModule,
    ActivityModule
  ],
  providers: [CustomerService, ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
