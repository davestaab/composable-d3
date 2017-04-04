import {earth, mars} from './planets';
import planetChart from './planetChart';
import { selectAll } from 'd3-selection';

export default function() {};

const chart = planetChart();

window.updateChart = function(type){
    console.log('switching to chart type:', type)
    switch(type) {
        case 'earth':
            selectAll('.layer')
                .data(earth.layers)
                .call(chart);
            break;
        case 'mars':
            selectAll('.layer')
                .data(mars.layers)
                .call(chart);
            break;
    }
}
