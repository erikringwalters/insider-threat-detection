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
import { RecSentScatterplotComponent } from './rec-sent-scatterplot/rec-sent-scatterplot.component';
import { UserLogScatterplotComponent } from './user-log-scatterplot/user-log-scatterplot.component';
import { RemMediaScatterplotComponent } from './rem-media-scatterplot/rem-media-scatterplot.component';
import { RemovableMediaKnnPlotComponent } from './removable-media-knn-plot/removable-media-knn-plot.component';
import { PluginKnnPlotComponent } from './plugin-knn-plot/plugin-knn-plot.component';
import { LogonKnnPlotComponent } from './logon-knn-plot/logon-knn-plot.component';

PlotlyModule.plotlyjs = PlotlyJS;



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContainerComponent,
    PlotTestComponent,
    RecSentScatterplotComponent,
    UserLogScatterplotComponent,
    RemMediaScatterplotComponent,
    RemovableMediaKnnPlotComponent,
    PluginKnnPlotComponent,
    LogonKnnPlotComponent
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
