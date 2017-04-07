import { scaleLinear } from 'd3-scale';
import { transition } from 'd3-transition';

export default function planetChart() {
    let size = 200;
    const scale = scaleLinear()
        .domain([0, 4025]) // miles
        .range([0, size]); // pixels
    function chart(entry) {
        scale.range([0, size]);
        
        const selection = entry
            .selectAll('.layer')
            .data(d => d.layers);
        // enter
        selection.enter()
            .append('circle')
            .attr('class', 'layer')
            .attr('r', 0)
            .transition()
            .attr('r', d => scale(d.radius))
            .attr('fill', d => d.color);

        // update
        selection
            .transition()
            .attr('r', 0)
            .transition()
            .attr('r', d => scale(d.radius))
            .attr('fill', d => d.color);

        // exit
        selection
            .exit()
            .transition()
            .attr('r', 0)
            .remove();
    };

    chart.size = function (_) {
        if (!arguments.length) return size;
        size = _;
        return chart;
    };

    return chart;
}
