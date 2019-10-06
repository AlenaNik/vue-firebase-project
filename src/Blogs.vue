<template>
  <div class="blogs">
    <h2> {{ blogTitle }}</h2>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>
<script>
   export default {
     name: 'Blogs',
     data() {
       return {
         blogTitle: 'Blogs'
       }
     },
     methods: {
       changeTitle() {
         this.blogTitle = 'Amazing Stuff'
       }
     },
     beforeCreate() {
       alert('before create Hook')
     },
     created() {
       alert('after hook')
     },
      beforeUpdate() {
          alert('before update hook')
      }
   }
</script>
<style>

</style>
