// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import 'core-js/features/symbol/';
import 'core-js/features/promise/';
import 'core-js/features/object/assign';
import 'core-js/features/array/from';
import 'core-js/features/array/find';
import 'core-js/features/number/is-nan';
import 'core-js/features/dom-collections/for-each';
import 'core-js/features/is-iterable';

import 'whatwg-fetch';
import './lib/polyfills.js';

import IMask from 'imask';
import Rellax from 'rellax';
import '../../node_modules/focus-visible/dist/focus-visible.js';

import objectFitImages from 'object-fit-images';
import svg4everybody from 'svg4everybody';

import InputNumber from './lib/inputNumber';

// import './components/header.js';
// import './components/header-modals.js';
// import './components/header-catalog.js';
// import './components/video.js';
// import './components/hero-message.js';
// import './components/basket.js';
// import './components/sliders.js';
// import './components/search.js';
// import './components/validation.js';
// import './components/city-selection.js';
// import './components/buttons.js';
// import './components/tooltip.js';
// import './components/mask.js';
// import './components/filter.js';
// import './components/contacts.js';
// import './components/pagination.js';
// import './components/basket-page.js';
// import './components/about-company.js';
// import './components/load-file.js';

svg4everybody();
objectFitImages();

const inputNumber = new InputNumber('.number');
