<template>
  <div class="index container">
    <div class="card" v-for="day in days" :key="day.id">
      <div  class="card-content">
          <p class="black-text">{{ day.title }}</p>
           <ul class="activities">
            <li v-for="(d, index) in day.activities" :key="index">
              <span class="chip">{{ d }}</span>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      days: [
        { title: 'Rainy Day', slug: 'rainy-day', activities: ['stay inside', 'coffee', 'movie'], id: 1},
        { title: 'Sunny Day', slug: 'sunny-day', activities: ['go outside', 'coffee to go', 'park'], id: 2}
      ]
    }
  }
}
</script>


<style scoped>

</style>
