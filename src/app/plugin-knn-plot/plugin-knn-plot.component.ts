import { Component, OnInit } from '@angular/core';
import plugin_false from '../../data/knn/device_plugin_count_false_knn.json';
import plugin_true from '../../data/knn/device_plugin_count_true_knn.json';
import user_false from '../../data/knn/user_false_knn.json';
import user_true from '../../data/knn/user_true_knn.json';
import index_false from '../../data/knn/index_false_knn.json'
import index_true from '../../data/knn/index_true_knn.json'

@Component({
  selector: 'app-plugin-knn-plot',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./plugin-knn-plot.component.css']
})
export class PluginKnnPlotComponent implements OnInit {

  pluginFalse: number[] = plugin_false;
  pluginTrue: number[] = plugin_true;
  userFalse: String[] = user_false;
  userTrue: String[] = user_true;
  indexFalse: number[] = index_false;
  indexTrue: number[] = index_true;

  foo = new Array<number>(4000); // create an empty array with length 4k

  constructor() { }

  ngOnInit() {
  }

  public graph = {
    data: [
        {
          name: 'Not a threat',
          x: this.indexFalse,
          y: this.pluginFalse,
          text: this.userFalse,
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
          x: this.indexTrue,
          y: this.pluginTrue,
          text: this.userTrue,
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
        title: 'Distance of External Devices Plugged in per Day',
        xaxis: { title: 'Index' },
        yaxis: { title: 'Device plugin count KNN' },

        // --misc params
        hovermode: 'closest',

        // --colors--
        // paper_bgcolor: 'rgba(0,0,0,0)', //Transparent
        // plot_bgcolor: 'rgba(0,0,0,0)'
      }
  };

}
