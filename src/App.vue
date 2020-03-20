<template>
  <div id="app">
    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link to="/deck/new">Go to New</router-link>
    <br>
    <router-link to="/deck/1">Go to deck 1</router-link>
    <router-view  />
  </div>
</template>

// <script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
// </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
