import { Component, OnInit } from '@angular/core';
import rem_false from '../../data/knn/removable_media_false_knn.json';
import rem_true from '../../data/knn/removable_media_true_knn.json';
import user_false from '../../data/knn/user_false_knn.json';
import user_true from '../../data/knn/user_true_knn.json';
import index_false from '../../data/knn/index_false_knn.json'
import index_true from '../../data/knn/index_true_knn.json'

@Component({
  selector: 'app-removable-media-knn-plot',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./removable-media-knn-plot.component.css']
})
export class RemovableMediaKnnPlotComponent implements OnInit {

  rem_false: number[] = rem_false;
  rem_true: number[] = rem_true;
  user_false: String[] = user_false;
  user_true: String[] = user_true;
  index_false: number[] = index_false;
  index_true: number[] = index_true;

  foo = new Array<number>(4000); // create an empty array with length 4k

  constructor() { }

  ngOnInit() {
  }

  public graph = {
    data: [
        {
          name: 'Not a threat',
          x: this.index_false,
          y: this.rem_false,
          text: this.user_false,
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: 'lightblue',
            size: 10,
            line: {
              width: 1,
              color: 'darkgray'
            }
          },
        },
        {
          name: 'Insider threat',
          x: this.index_true,
          y: this.rem_true,
          text: this.user_true,
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: 'red',
            size: 10,
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
        title: 'knn',
        xaxis: { title: 'index' },
        yaxis: { title: 'knn' },

        // --misc params
        hovermode: 'closest',

        // --colors--
        // paper_bgcolor: 'rgba(0,0,0,0)', //Transparent
        // plot_bgcolor: 'rgba(0,0,0,0)'
      }
  };

}
