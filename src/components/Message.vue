<template>
<div class="message">
  <form @submit.prevent="addMessage">
    <label for="message">New chat message (enter to add)</label>
    <input type="text" name="message" v-model="Message">
  </form>
</div>
</template>

<script>
  export default {
    name: 'Message',
    props: ['name'],
    data() {
      return {
        Message: null
      }
    },
    methods: {
      addMessage() {
        console.log(this.Message, this.name, Date.now())
      }
    }
  }
</script>
