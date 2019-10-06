<template>
  <div id="online-friends">
    <h2 class="font-bold bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">Online Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span class="center text-green-600" v-if="friend.online === true"> {{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OnlineFriends',
    props: ['friends'],
    data() {
      return {
      }
    }
  }
</script>
<style>

</style>
