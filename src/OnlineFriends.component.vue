<template>
  <div id="online-friends">
    <h2>Online Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span v-if="friend.online === true"> {{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OnlineFriends',
    data() {
      return {
        friends : [
          { name: 'Mario', online: true },
          { name: 'María', online: false },
          { name: 'Alicia', online: false },
          { name: 'David', online: true }
        ]
      }
    }
  }
</script>
<style>

</style>
