<template>
  <div class="blogs">
    <h2> Starships </h2>
    <div v-for="ship in starships" :key="ship.name">

      <h3>{{ ship.name }}</h3>
      <p>{{ ship.model }}</p>
      <p>{{ ship.manufacturer }}</p>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
   export default {
     name: 'Blogs',
     data() {
       return {
          starships: []
       }
     },
     methods: {

     },
     created() {
       axios.get('https://swapi.co/api/starships?format=json')
         .then((res) => {
           console.log(res);
           this.starships = res.data.results
         })
     }
   }
</script>
<style>

</style>
