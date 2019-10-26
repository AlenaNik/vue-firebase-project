<template>
  <div class="chat container">Chat window
      <p>Hello, {{ this.name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    props: ['name'],
    data() {
      return {
      }
    }
  }
</script>
<style>

</style>
