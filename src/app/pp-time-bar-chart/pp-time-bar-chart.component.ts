import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { times } from '../../data/pp_time/preprocessing_time'

@Component({
  selector: 'app-pp-time-bar-chart',
  templateUrl: './pp-time-bar-chart.component.html',
  styleUrls: ['./pp-time-bar-chart.component.css']
})
export class PpTimeBarChartComponent implements OnInit {

  times: any[];

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  title = 'Time Taken by Different Preprocessing Methods'
  xAxisLabel = 'Processing tool used';
  showYAxisLabel = true;
  yAxisLabel = 'Time taken (minutes)';

  colorScheme = {
    domain: ['#2F4550', '#2F4550', '#2F4550', '#2F4550']
  };

  constructor() {
    Object.assign(this, { times })
   }

  ngOnInit() {
  }

}
