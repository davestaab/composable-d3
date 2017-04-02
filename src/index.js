import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { earth } from './planets';

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

function planetChart() {
    let size = 200;
    const scale = scaleLinear()
        .domain([0, 4025]) // miles
        .range([0, size]); // pixels

    function chart(selection) {
        scale.range([0, size]);
        selection.enter()
            .append('circle')
            .attr('class', 'layer')
            .attr('r', d => scale(d.radius))
            .attr('fill', d => d.color);
    };

    chart.size = function (_) {
        if (!arguments.length) return size;
        size = _;
        return chart;
    };

    return chart;
}
