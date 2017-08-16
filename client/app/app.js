import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import AppComponent from './app.component';
import 'normalize.css';
import {namespace as Components} from './components/components';
import {namespace as Services} from "./services/services";
import {namespace as Directives} from "./directives/directives";

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Services,
    Directives,
    'ngMaterial'
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
