import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

const earth = {
    layers: [
        {
            name: 'crust',
            radius: 4025,
            color: '#7fc97f'
        },
        {
            name: 'mantle',
            radius: 4000,
            color: '#bf5b17'
        },
        {
            name: 'outerCore',
            radius: 2200,
            color: '#fdc086'
        },
        {
            name: 'innerCore',
            radius: 800,
            color: '#ffff99'
        }
    ]
}

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
