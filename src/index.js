import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { earth, mars } from './planets';
import planetChart from './planetChart';
import helper from './helper';

const planet = planetChart()

const selection = select('#chart')
    .append('svg')
    .attr('class', 'space')
    .attr('width', 500)
    .attr('height', 500)
    .append('g')
    .attr('transform', 'translate(250, 250)')
    .selectAll('.layer')
    .data(earth.layers)
    .call(planet)
