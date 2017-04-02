import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

const earth = {
    crust: {
        name: 'crust',
        radius: 4025,
        color: '#7fc97f'
    },
    mantle: {
        name: 'mantle',
        radius: 4000,
        color: '#bf5b17'
    },
    outerCore: {
        name: 'outerCore',
        radius: 2200,
        color: '#fdc086'
    },
    innerCore: {
        name: 'innerCore',
        radius: 800,
        color: '#ffff99'
    }
}
