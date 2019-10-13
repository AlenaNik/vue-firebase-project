<template>
    <div class="navbar">
      <nav class="nav-extended blue lighten-5">
          <div class="nav-content">
              <router-link :to="{ name: 'Index'}">
                  <span class="nav-title blue-text text-darken-2">Little app</span>
              </router-link>
            <a href="" class="btn-floating btn-large halfway-fab pink">
              <router-link :to="{ name: 'AddADay'}">
                <i class="material-icons">add</i>
              </router-link>
            </a>
          </div>
      </nav>
    </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {

      }
    }
  }
</script>
<styles>

</styles>
