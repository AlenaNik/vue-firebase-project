<template>
  <div id="all-friends">
      <h2 class="font-bold bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">All Friends</h2>
      <div v-for="(friend, index) in friends" :key="index">
       <span
         class="text-indigo-500"
       @click="unfriend(friend.name)"
       >  {{ friend.name }} </span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'AllFriends',
    props: ['friends'],
    data() {
      return {

      }
    },
    methods: {
      unfriend(name){
        this.$emit('delete', { name })
      }
    }
  }
</script>

<style>

</style>
