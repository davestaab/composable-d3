import { scaleLinear } from 'd3-scale';
import { min, max } from 'd3-array';
import { transition } from 'd3-transition';

export default function solarSystemChart() {
    let size = 200;
    let planetChart;

    const scale = scaleLinear()
        .domain([0, 4025]) // miles
        .range([0, size]); // pixels

    function chart(entry) {
        scale
            .domain([
                min(entry.data()[0].map(d => d.distance)),
                max(entry.data()[0].map(d => d.distance))
            ])
            .range([0, size]);

        const selection = entry
            .selectAll('.planet')
            .data(d => d);

        // enter
        selection.enter()
            .append('g')
            .attr('class', 'planet')
            .attr('transform', function (d) {
                return 'translate(0, ' + scale(d.distance) + ')'
            })
            .call(planetChart);

    };

    chart.size = function (_) {
        if (!arguments.length) return size;
        size = _;
        return chart;
    };

    chart.planetChart = function (_) {
        if (!arguments.length) return planetChart;
        planetChart = _;
        return chart;
    };

    return chart;
}
