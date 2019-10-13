<template>
  <div class="add-a-day container">
    <h2 class="center-align indigo-text">
      Add Plans for a New Day
    </h2>
    <form @submit.prevent="formMethod">
      <div class="field title">
        <label for="title">Day: </label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-a-day">
        <label for="add-an-activity">Add an activity</label>
        <input type="text" name="add-activity" @keydown.tab.prevent="addAct" v-model="next">
      </div>
      <div class="field center-align">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
        <button class="btn pink">
          Add a day
        </button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'AddADay',
    data() {
      return {
        title: null,
        next: null,
        activities: [],
        feedback: null
      }
    },
    methods: {
      formMethod(){
        console.log(this.title, this.activities)
      },
      addAct(){
        if(this.next){
          this.activities.push(this.next);
          this.next = null;
          this.feedback = null
        } else {
          this.feedback = 'Can\'t be empty!'
        }
      }
    }
  }
</script>
<style>
.add-a-day{
  margin-top: 60px;
  max-width: 500px;
}
.add-a-day h2{
  font-size: 2em;
  margin: 20px auto;
}
.add-a-day .field {
  margin: 20px auto;
}

</style>
