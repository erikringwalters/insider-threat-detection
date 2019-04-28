import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { CommonModule } from '@angular/common';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlotTestComponent } from './plot-test/plot-test.component';
import { PlotlyWrapperComponent } from './plotly-wrapper/plotly-wrapper.component';

PlotlyModule.plotlyjs = PlotlyJS;



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContainerComponent,
    PlotTestComponent,
    PlotlyWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    InViewportModule,
    ScrollSpyModule.forRoot(),
    CommonModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
