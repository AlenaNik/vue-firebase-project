<template>
  <div class="index container">
    <div class="card" v-for="day in days" :key="day.id">
      <div class="card-content">
        <i
          @click="deleteDay"
          class="material-icons"
          :style="{ 'cursor': 'pointer'}"
        >delete</i>
          <p class="black-text">{{ day.title }}</p>
           <ul class="activities">
            <li v-for="(d, index) in day.activities" :key="index">
              <span
                class="chip">{{ d }}</span>
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
  },
  methods: {
    deleteDay(index){
      this.days.splice(index, 1)
    }
  }
}
</script>


<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
}
.index p {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .activities {
  margin: 30px auto;
}
.index .activities li{
  display: inline-block;
}

</style>
