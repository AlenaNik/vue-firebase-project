<template>
<div class="message">
  <form @submit.prevent="addMessage">
    <label for="message">New chat message (enter to add)</label>
    <input type="text" name="message" v-model="Message">
    <p v-if="feedback" class="red-text"> {{ feedback }}</p>
  </form>
</div>
</template>

<script>
import db from '../firebase/init';

  export default {
    name: 'Message',
    props: ['name'],
    data() {
      return {
        Message: null,
        feedback: null,
      }
    },
    methods: {
      addMessage() {
        console.log(this.Message, this.name, Date.now());
        (this.Message) ?
          db.collection('messages').add({
            content: this.Message,
            name: this.name,
            timestamp: Date.now()
          })
          : (this.feedback = "Enter a message")
      }
    }
  }
</script>
