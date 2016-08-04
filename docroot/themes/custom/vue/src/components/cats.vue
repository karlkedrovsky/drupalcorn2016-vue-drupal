<template>
  <div>
    <h2>Cats</h2>
    <p>
      <ul>
        <li v-for="cat in cats">
          <a v-on:click="loadCat(cat)">{{ cat.title }}</a>
        </li>
      </ul>
    </p>
  </div>
</template>
<script>
  export default {
    name: "Cats",
    data() {
      return {
        cats: {}
      }
    },
    ready() {
      Vue.http.get('/api/cats').then((response) => {
        this.cats = response.json();
      }, (response) => {
        console.log('Error');
      });
    },
    methods: {
      loadCat(cat) {
        this.$dispatch('new-cat', cat);
      }
    }
  }
</script>
<style>
 a:hover {
   cursor: pointer;
 }
</style>
