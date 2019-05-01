import { Component, OnInit } from '@angular/core';

import user_true from '../../data/user_log/user_true.json';
import user_false from '../../data/user_log/user_false.json';
import logoff_true from '../../data/user_log/logoff_true.json';
import logoff_false from '../../data/user_log/logoff_false.json';
import logon_true from '../../data/user_log/logon_true.json';
import logon_false from '../../data/user_log/logon_false.json';

@Component({
  selector: 'app-user-log-scatterplot',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./user-log-scatterplot.component.css']
})
export class UserLogScatterplotComponent implements OnInit {

  userTrue: String[] = user_true;
  userFalse: String[] = user_false;
  logoffTrue: number[] = logoff_true;
  logoffFalse: number[] = logoff_false;
  logonTrue: number[] = logon_true;
  logonFalse: number[] = logon_false;

  constructor() { }

  ngOnInit() {
  }

  public graph = {
    data: [
        {
          name: 'Not a threat',
          x: this.logoffFalse,
          y: this.logonFalse,
          text: this.userFalse,
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: 'lightblue',
            size: 5,
            line: {
              width: 1,
              color: 'darkgray'
            }
          },
        },
        {
          name: 'Insider threat',
          x: this.logoffTrue,
          y: this.logonTrue,
          text: this.userTrue,
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: 'red',
            size: 5,
            line: {
              width: 1,
              color: 'black'
            }
          },
        },
    ],
    layout: {
      // --dimensions
      width: 800,
      height: 500,

      // --titles and labels
      title: 'Standard Deviations of User Log on/off',
      xaxis: { title: 'deviations of logoff' },
      yaxis: { title: 'deviations of logon' },

      // --misc params
      hovermode: 'closest',

      // --colors--
      // paper_bgcolor: 'rgba(0,0,0,0)', //Transparent
      // plot_bgcolor: 'rgba(0,0,0,0)'
    }
};


}
