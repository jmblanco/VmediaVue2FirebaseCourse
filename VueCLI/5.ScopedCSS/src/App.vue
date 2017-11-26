<template>
  <div>
    <h1>Principal Menu</h1>
    <ul>
      <li><a href="">Link 1</a></li>
      <li><a href="">Link 2</a></li>
      <li><a href="">Link 3</a></li>
      <li><a href="">Link 4</a></li>
      <li><a href="">Link 5</a></li>
      <li><a href="">Link 6</a></li>
    </ul>
    <hr>
    <tasks></tasks>
  </div>
</template>

<script>
import tasks from './components/Tasks.component';
export default {
  components: {
    tasks
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
