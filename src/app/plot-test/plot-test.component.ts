import { Component, OnInit } from '@angular/core';

import user_true from '../../data/stripped_media/user_true.json';
import user_false from '../../data/stripped_media/user_false.json';
import to_media_true from '../../data/stripped_media/to_rem_true.json';
import to_media_false from '../../data/stripped_media/to_rem_false.json';
import from_media_true from '../../data/stripped_media/from_rem_true.json';
import from_media_false from '../../data/stripped_media/from_rem_false.json';

@Component({
  selector: 'app-plot-test',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./plot-test.component.css']
})
export class PlotTestComponent implements OnInit {

  userTrue: String[] = user_true;
  userFalse: String[] = user_false;
  toMediaTrue: number[] = to_media_true;
  toMediaFalse: number[] = to_media_false;
  fromMediaTrue: number[] = from_media_true;
  fromMediaFalse: number[] = from_media_false;

  constructor() { }

  ngOnInit() {
  }

  public graph = {
    data: [
        {
          name: 'Not a threat',
          x: this.toMediaFalse,
          y: this.fromMediaFalse,
          text: this.userFalse,
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: 'lightblue',
            size: 10,
            line: {
              width: 2,
              color: 'darkgray'
            }
          },
        },
        {
          name: 'Insider threat',
          x: this.toMediaTrue,
          y: this.fromMediaTrue,
          text: this.userTrue,
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: 'red',
            size: 10,
            line: {
              width: 2,
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
      title: 'Standard Deviations of Removable Media',
      xaxis: { title: 'deviations from removable media' },
      yaxis: { title: 'deviations to removable media' },

      // --misc params
      hovermode: 'closest',

      // --colors--
      // paper_bgcolor: 'rgba(0,0,0,0)', //Transparent
      // plot_bgcolor: 'rgba(0,0,0,0)'
    }
};


}
