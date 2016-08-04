<template>
  <div>
    <h2>Pages Read</h2>
    <span class="pages-read-count">{{ count }}</span>
  </div>
</template>
<script>
 export default {
   name: "PagesReadCount",
   data() {
     return {
       count: 0
     }
   },
   ready() {
     this.$on('new-page', function(newPage) {
       this.count++;
     });
   }
 }
</script>
<style>
 .pages-read-count {
   font-size: 24px;
 }
</style>
