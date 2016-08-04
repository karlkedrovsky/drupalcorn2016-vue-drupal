<template>
  <div>
  <h2>Pages</h2>
  <p>
    <ul>
      <li v-for="page in pages">
        <a v-on:click="loadPage(page)">{{ page.title }}</a>
      </li>
    </ul>
  </p>
  </div>
</template>
<script>
  import VueRouter from 'vue-router';
  export default {
   name: "Pages",
   data() {
     return {
       pages: {},
       current_page: ""
     }
   },
   ready() {
     Vue.http.get('/api/pages').then((response) => {
       var pages = response.json();
       this.pages = pages;
       if (pages.length > 0) {
         this.current_page = pages[0];
       }
     }, (response) => {
       console.log('Error');
     });
   },
    methods: {
      loadPage(page) {
        this.$dispatch('new-page', page);
      }
    }
 }
</script>
<style>
</style>
