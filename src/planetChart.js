import { scaleLinear } from 'd3-scale';
import { transition } from 'd3-transition';

export default function planetChart() {
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
