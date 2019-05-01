import { Component, OnInit } from '@angular/core';

import user_true from '../../data/rec_sent/user_true.json';
import user_false from '../../data/rec_sent/user_false.json';
import sent_out_true from '../../data/rec_sent/sent_out_true.json';
import sent_out_false from '../../data/rec_sent/sent_out_false.json';
import rec_out_true from '../../data/rec_sent/rec_out_true.json';
import rec_out_false from '../../data/rec_sent/rec_out_false.json';

@Component({
  selector: 'app-rec-sent-scatterplot',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./rec-sent-scatterplot.component.css']
})
export class RecSentScatterplotComponent implements OnInit {

  userTrue: String[] = user_true;
  userFalse: String[] = user_false;
  recTrue: number[] = rec_out_true;
  recFalse: number[] = rec_out_false;
  sentTrue: number[] = sent_out_true;
  sentFalse: number[] = sent_out_false;

  constructor() { }

  ngOnInit() {
  }

  public graph = {
    data: [
        {
          name: 'Not a threat',
          x: this.recFalse,
          y: this.sentFalse,
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
          x: this.recTrue,
          y: this.sentTrue,
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
      title: 'Standard Deviations of sent and received (?)',
      xaxis: { title: 'deviations from received (?)' },
      yaxis: { title: 'deviations to sent (?)' },

      // --misc params
      hovermode: 'closest',

      // --colors--
      // paper_bgcolor: 'rgba(0,0,0,0)', //Transparent
      // plot_bgcolor: 'rgba(0,0,0,0)'
    }
};


}
