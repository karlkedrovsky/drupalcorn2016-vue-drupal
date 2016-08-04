import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

import Demo from './components/demo.vue';
import Cat from './components/cat.vue';

new Vue({
  el: '#page',
  components: {
    Demo,
    Cat
  }
});
