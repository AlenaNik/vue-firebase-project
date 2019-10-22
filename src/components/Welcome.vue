<template>
  <div class="welcome container">
    <div class="card">
        <div class="card-content center-align">
            <h2 class="teal-text">Vue</h2>
            <form @submit.prevent="startChatting">
            <label for="name">Enter your name:</label>
            <input type="text" name="name" v-model="name">
            <button
            @click="submitTheForm"
            class="btn teal"
            >Start the chat</button>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null
    }
  },
  methods: {
    enterChat() {
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
