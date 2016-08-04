import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

import Demo from './components/demo.vue';
import Cats from './components/cats.vue';
import Cat from './components/cat.vue';

new Vue({
  el: '#page',
  components: {
    Demo,
    Cat,
    Cats
  },
  ready() {
    this.$on('new-cat', function(cat) {
      this.$broadcast('new-cat', cat);
    }, (response) => {
      console.log('Error');
    });
  }
});
