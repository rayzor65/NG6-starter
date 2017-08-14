import template from './shop.html';
import controller from './shop.controller';
import './shop.scss';

let shopComponent = {
    bindings: {
        products: '<'
    },
    template,
    controller
};

export default shopComponent;
