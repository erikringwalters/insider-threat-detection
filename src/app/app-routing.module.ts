//Import component base and routing module
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import all components to be routed to
import { NavComponent } from './nav/nav.component';
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
  }
  //TODO: route left and right
  //TODO: route catch all for 404 error
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
