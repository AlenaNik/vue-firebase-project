<template>
  <div class="blogs">

    <h2 class="font-bold bg-indigo-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"> Starships </h2>
    <input class="border-b border-blue-500" type="text" v-model="searchTerm">
    <div v-for="ship in filteredShips" :key="ship.name">
      <h3 class="text-blue-600">{{ ship.name }}</h3>
      <p class="text-pink-600">{{ ship.model }}</p>
      <p class="text-pink-800">{{ ship.manufacturer | snippet}}</p>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
   export default {
     name: 'Blogs',
     data() {
       return {
          starships: [],
          searchTerm: ''
       }
     },
     methods: {

     },
     computed: {
       filteredShips(){
         return  this.starships.filter(ship => {
           return ship.name.match(this.searchTerm)
         })
       }
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
