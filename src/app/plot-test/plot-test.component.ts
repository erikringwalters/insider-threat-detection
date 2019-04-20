import { Component, OnInit } from '@angular/core';
import to_media from '../../data/to_media.json';
import from_media from '../../data/from_media.json';

@Component({
  selector: 'app-plot-test',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./plot-test.component.css']
})
export class PlotTestComponent implements OnInit {

  dat: number[] = to_media;
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
          marker: {color: 'black'},
          layout: {hovermode: 'closest'}
        },
    ],
    layout: {width: 1000, height: 500, title: 'from media by to media std dev'}
};


}
