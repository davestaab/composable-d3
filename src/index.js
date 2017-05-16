import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { planets } from './planets';
import planetChart from './planetChart';
import solarSystemChart from './solarSystemChart';

const planet = planetChart().size(10)
const solarSystem = solarSystemChart().size(3200).planetChart(planet);

const selection = select('#chart')
    .append('svg')
    .attr('class', 'space')
    .attr('width', 500)
    .attr('height', 3400)
    .append('g')
    .attr('transform', 'translate(250,  100)');


selection
    .datum(planets)
    .call(solarSystem);
