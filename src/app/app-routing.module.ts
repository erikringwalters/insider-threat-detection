
//Import component base and routing module
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import all components to be routed to
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //no specified path goes to home
  {
    path: '',
    component: HomeComponent
  },
  //Home path leads to home component
  {
    path: 'home',
    component: HomeComponent
  },
  //Catch all for undefined routes
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
