<template>
  <div id="app">
    <Navbar/>
    <h1>{{ title }}</h1>
    <AllFriends/>
    <OnlineFriends/>
  </div>
</template>

<script>
import Navbar from "./Navbar.component";
import AllFriends from "./AllFriends.component";
import OnlineFriends from "./OnlineFriends.component";

export default {
  name: 'app',
  components: {
    OnlineFriends,
    AllFriends,
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
