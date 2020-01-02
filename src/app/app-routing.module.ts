import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo:'customer', pathMatch: 'full'},
  // { path: 'dashboard', loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'customer', loadChildren: () => import('src/app/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'activity', loadChildren: () => import('src/app/activity/activity.module').then(m => m.ActivityModule) },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
