<template>
  <div>
    <h2>Cat Pictures Viewed</h2>
    <span class="cat-count">{{ count }}</span>
  </div>
</template>
<script>
 export default {
   name: "CatCounter",
   data() {
     return {
       count: 0
     }
   },
   ready() {
     this.$on('new-cat', function(newCat) {
       this.count++;
     });
   }
 }
</script>
<style>
 .cat-count {
   font-size: 24px;
 }
</style>
