import '../scss/style.scss';

// ---------------------------------- utils ---------------------------------

import * as utils from './utils/utils.js';

// hamburger menu
utils.menuInit();

// set current year
utils.setCurrentYear();

// switch attribute value on resize
utils.switchAttrValue();

// ------------------------------- components -------------------------------

// forms
import './utils/forms';

// tabs
import './utils/tabs.js';

// accordion
// import './utils/accordion.js';

// select
import './utils/select.js';

// modals
import './utils/modals.js';

// ---------------------------------- libs ----------------------------------

// dynamic dom
import './lib/dd';

// swiper
import './lib/swiper';

// input mask
import './lib/inputmask';

// videojs
import './lib/video';

// simplebar
import './lib/simplebar';

// --------------------------------------------------------------------------

import './dev/vzmsk1.js';
import './dev/markusDM.js';
