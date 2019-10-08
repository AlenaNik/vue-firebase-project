<template>
  <div id="app">
    <Navbar />
    <Index/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.component";
import Index from "./components/Index";
export default {
  name: 'App',
  components: {
    Index,
    Navbar
  }
}
</script>

<style>

</style>
