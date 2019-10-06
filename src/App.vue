<template>
  <div id="app">
    <Navbar/>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar.component";

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      title: 'Vue App, woo :)'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1  {
  font-weight: normal;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
