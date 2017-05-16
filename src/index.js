import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { earth, mars } from './planets';
import planetChart from './planetChart';
// import helper from './helper';

const planet = planetChart()

const selection = select('#chart')
    .append('svg')
    .attr('class', 'space')
    .attr('width', 500)
    .attr('height', 500)
    .append('g')
    .attr('transform', 'translate(250, 250)')

selection.selectAll('.layer')
    .data(earth.layers)
    .call(planet);

window.updateChart = function(type){
    console.log('switching to chart type:', type)
    switch(type) {
        case 'earth':
            selection
                .selectAll('.layer')
                .data(earth.layers)
                .call(chart);
            break;
        case 'mars':
            selection
                .selectAll('.layer')
                .data(mars.layers)
                .call(chart);
            break;
    }
}
