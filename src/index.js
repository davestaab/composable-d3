import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { earth } from './planets';

const size = 200;
const scale = scaleLinear()
    .domain([0, 4025]) // miles
    .range([0, size]); // pixels

const selection = select('.earth')
    .selectAll('.layer')
    .data(earth.layers);

selection.enter()
    .append('circle')
    .attr('class', 'layer')
    .attr('r', d => scale(d.radius))
    .attr('fill', d => d.color);
