<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">
        Twotter
      </div>
      <div class="navigation__user">
        {{ state.user.username }}
      </div>
    </nav>
    <UserProfile/>
  </div>
</template>

<script>
import { reactive } from 'vue';
import UserProfile from "./components/UserProfile";

export default {
  name: "App",
  components: { UserProfile },
  setup() {
    const state = reactive({
      user: {
        username: '_HelderLopes'
      }
    })

    return {
        state
      }
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;
}

</style>