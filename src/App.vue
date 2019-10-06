<template>
  <div id="app">
    <Navbar/>
    <h1 class="font-bold bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">{{ title }}</h1>
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
    <Blogs/>
  </div>
</template>

<script>
import Navbar from "./Navbar.component";
import AllFriends from "./AllFriends.component";
import OnlineFriends from "./OnlineFriends.component";
import Blogs from "./Blogs";

export default {
  name: 'app',
  components: {
    Blogs,
    OnlineFriends,
    AllFriends,
    Navbar
  },
  data () {
    return {
      title: 'Vue App, woo :)',
      friends : [
        { name: 'Mario', online: true },
        { name: 'María', online: false },
        { name: 'Alicia', online: false },
        { name: 'David', online: true }
      ]
    }
  },
  methods: {
    deleteFriend(payload) {
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
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
