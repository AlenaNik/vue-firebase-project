<template>
  <div class="blogs">
    <h2 class="font-bold bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"> Starships </h2>
    <div v-for="ship in starships" :key="ship.name">

      <h3 class="text-blue-600">{{ ship.name }}</h3>
      <p class="text-pink-600">{{ ship.model }}</p>
      <p class="text-pink-800">{{ ship.manufacturer }}</p>

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
         }).catch(err => {
           console.log(err)
       })
     }
   }
</script>
<style>

</style>
