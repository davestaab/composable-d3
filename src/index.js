import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { planets } from './planets';
import { max } from 'd3-array';
import planetChart from './planetChart';
import solarSystemChart from './solarSystemChart';


const planet = planetChart()
const scale = planet.scale();
scale
    .range([0, 3200])
    .domain([
        0,
        max(planets.map(d => d.distance))
    ]);

const solarSystem = solarSystemChart()
    .scale(scale)
    .planetChart(planet.scale(scale));

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
