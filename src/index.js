import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { planets } from './planets';
import planetChart from './planetChart';

const planet = planetChart().size(200)

const selection = select('#chart')
    .append('svg')
    .attr('class', 'space')
    .attr('width', 500)
    .attr('height', 1400)
    .append('g')
    .attr('transform', 'translate(250,  200)');

selection.selectAll('.layer')
    .data(planets[0].layers)
    .call(planet);
