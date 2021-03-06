import Vue from 'vue';
import Vuex from 'vuex';

import Bus from '@fj-js/common/event.bus';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import VueDropzone from 'vue2-dropzone';
//import 'vue2-dropzone/dist/vue2Dropzone.min.css';

import BootstrapVue from 'bootstrap-vue';
import VueCodemirror from 'vue-codemirror';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import Draggable from 'vuedraggable';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

// FontAwesome
library.add(far);
library.add(fas);
library.add(fab);
Vue.component('fa-icon', FontAwesomeIcon);

// Modules
Vue.use(Vuex);
Vue.use(BootstrapVue, {
    BTooltip: {
        delay: {
            show: 800,
            hide: 100
        }
    },
    BToast: {
        toaster: 'b-toaster-bottom-right'
    }
});
Vue.use(VueCodemirror);
Vue.use(Draggable);
Vue.use(VueDropzone);
Vue.use(VueLodash, { lodash });

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

// prototypes
Vue.prototype.$bus = Bus;
