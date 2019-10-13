<template>
  <div v-if="day" class="edit-day container">
    <h2>
      Edit {{ day.title}}
    </h2>
    <form @submit.prevent="EditDay">
      <div class="field title">
        <label for="title">Day: </label>
        <input type="text" name="title" v-model="day.title">
      </div>
      <div v-for="(act, index) in day.activities" :key="index">
        <label for="activity">Activity:</label>
        <input type="text" name="activity" v-model="day.activities[index]">
        <i class="material-icons delete" @click="deleteAct(act)">delete</i>
      </div>
      <div class="field add-a-day">
        <label for="add-an-activity">Add an activity</label>
        <input type="text" name="add-activity" @keydown.tab.prevent="addAct" v-model="next">
      </div>
      <div class="field center-align">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
        <button class="btn pink">
          Update a day
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'EditDay',
  data() {
    return {
      day: null,
      another: null,
      feedback: null
    }
  },
  methods: {
    addAct() {
      if (this.next) {
        this.day.activities.push(this.next);
        this.next = null;
        this.feedback = null
      } else {
        this.feedback = 'Can\'t be empty!'
      }
    },
    deleteAct(act) {
      this.day.activities = this.day.activities.filter(activity => {
        return activity != act
      })
    },
    EditDay() {
      if (this.day.title){
        this.feedback = null;
        // create slug
        this.slug = slugify(this.day.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        db.collection('days').doc(this.day.id).update({
          title: this.day.title,
          activities: this.day.activities,
          slug: this.slug
        }).then(() => {
          this.$router.push( { name: 'Index' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a Day title'
      }
    }
  },
  created(){
    let ref = db.collection('days').where('slug', '==', this.$route.params.day_slug)
   ref.get().then(snapshot => {
     snapshot.forEach(doc => {
       this.day = doc.data()
       this.day.id = doc.id
     })
   })
    }
  }
</script>

<style>
  .edit-a-day{
    margin-top: 60px;
    max-width: 500px;
  }
  .edit-a-day h2{
    font-size: 2em;
    margin: 20px auto;
  }
  .edit-a-day .field {
    margin: 20px auto;
  }
</style>
