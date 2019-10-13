<template>
  <div class="index container">
    <div class="card" v-for="day in days" :key="day.id">
      <div class="card-content">
        <i
          @click="deleteDay(day.id)"
          class="material-icons delete"
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
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      days: [
      ]
    }
  },
  methods: {
    deleteDay(id){
      this.days = this.days.filter(day => {
        return day.id !== id
      })
    }
  },
  created() {
    // fetch data
    db.collection('days').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let day = doc.data();
          day.id = doc.id;
          this.days.push(day)
        })
      })
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
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  color: #aaa;
  font-size: 1.4em;
}
</style>
