import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';


const routes: Routes = [
  {path: '', component: DashboardCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
