<template>
  <div class="chat container">
    <h2 class="center teal-text"> Chat Window </h2>
      <div class="card">
        <div class="card-content">
          <ul class="chatmessages">
            <li>
              <span class="teal-text">
                {{ this.name }}
              </span>
              <span class="grey-text text-darken-3">
                message content
              </span>
              <span class="grey-text time">time</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <Message :name="name"/>
        </div>
      </div>
  </div>
</template>

<script>
  import Message from './Message';

  export default {
    name: 'Chat',
    props: ['name'],
    components: {
      Message
    },
    data() {
      return {
      }
    }
  }
</script>
<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}

.chat .time {
  display: block;
}
</style>
