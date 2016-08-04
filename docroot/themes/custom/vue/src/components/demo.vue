<template>
  <div>
    <h2>{{ title }}</h2>
    {{ message }}
  </div>
</template>
<script>
 export default {
   name: "Demo",
   data() {
     return {
       title: "This Is A Demo",
       message: "Vue.js is awesome."
     }
   }
 }
</script>
