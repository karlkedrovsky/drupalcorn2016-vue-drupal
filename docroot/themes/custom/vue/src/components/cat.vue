<template>
  <div>
    <h2>{{ title }}</h2>
    {{{ picture }}}
  </div>
</template>
<script>
  export default {
    name: "Cat",
    data() {
      return {
        title: "Let's see some cats!",
        picture: "A cat picture goes here."
      }
    },
    ready() {
      this.$on('new-cat', function(newCat) {
        this.title = newCat.title;
        this.picture = newCat.field_picture;
      });
    }
  }
</script>
