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

console.log('4000 to pixels is', scale(4000));
console.log('0 to pixels is', scale(0));
console.log('earths crust in pixels', scale(earth.crust.radius));

var earthCrust = select('.earth')
  .append('circle');

earthCrust.attr('r', scale(earth.crust.radius));
earthCrust.attr('fill', earth.crust.color);
//
select('.earth')
  .append('circle')
  .attr('r', scale(earth.mantle.radius))
  .attr('fill', earth.mantle.color);

select('.earth')
    .append('circle')
    .attr('r', scale(earth.outerCore.radius))
    .attr('fill', earth.outerCore.color);
//
select('.earth')
    .append('circle')
    .attr('r', scale(earth.innerCore.radius))
    .attr('fill', earth.innerCore.color);
