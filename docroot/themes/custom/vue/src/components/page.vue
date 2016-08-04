<template>
  <div>
    <h2>{{ title }}</h2>
    {{ body }}
  </div>
</template>
<script>
 export default {
   name: "Page",
   data() {
     return {
       title: "Start Reading",
       body: "Select articles from the left to start reading."
     }
   },
   ready() {
     this.$on('new-page', function(newPage) {
       this.title = newPage.title;
       this.body = newPage.body;
     });
   }
 }
</script>
<style>
</style>
