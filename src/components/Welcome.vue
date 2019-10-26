<template>
  <div class="welcome container">
    <div class="card">
        <div class="card-content center-align">
            <h2 class="teal-text">Main</h2>
            <form @submit.prevent="enterTheChat">
            <label for="name">Enter your name:</label>
            <input type="text" name="name" v-model="name">
              <p v-if="message" class="red-text">{{ message }}</p>
            <button
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
      name: null,
      message: null
    }
  },
  methods: {
    enterTheChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name} })
      } else {
        this.message = 'You must enter a name to join'
      }
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }
  .welcome h2 {
    font-size: 3em;
  }
  .welcome button {
    margin: 40px;
  }
</style>
