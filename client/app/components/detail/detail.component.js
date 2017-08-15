import template from './detail.html';
import controller from './detail.controller';
import './detail.scss';

let detailComponent = {
    bindings: {
        product: '<'
    },
    template,
    controller
};

export default detailComponent;
