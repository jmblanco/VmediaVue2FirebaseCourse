<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Counter.component';

export default {
  components: { Counter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
