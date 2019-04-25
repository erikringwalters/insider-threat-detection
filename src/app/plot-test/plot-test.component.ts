import { Component, OnInit } from '@angular/core';
import to_media_true from '../../data/stripped_media/to_rem_true.json';
import to_media_false from '../../data/stripped_media/to_rem_false.json';

import from_media from '../../data/from_media.json';

@Component({
  selector: 'app-plot-test',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./plot-test.component.css']
})
export class PlotTestComponent implements OnInit {

  toMediaTrue: number[] = to_media_true;

  toMediaFalse: number[] = to_media_false;
  dat2: number[] = from_media;

  constructor() { }

  ngOnInit() {
  }

  public graph = {
    data: [
        { x: this.dat,
          y: this.dat2,
          type: 'scatter',
          mode: 'markers',
          marker: {color: 'teal'},
          layout: {hovermode: 'closest'}
        },
        { x: this.dat2,
          y: this.dat,
          type: 'scatter',
          mode: 'markers',
          marker: {color: 'darkred'},
          layout: {hovermode: 'closest'}
        },
    ],
    layout: {width: 800, height: 800, title: 'from media by to media std dev'}
};


}
