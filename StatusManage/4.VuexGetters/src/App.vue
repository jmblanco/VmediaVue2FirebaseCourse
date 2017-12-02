<template>
  <div id="app">
    <remaining-tasks></remaining-tasks>
    <hr>
    <ul>
      <li style="cursor: pointer" v-for="task in tasks" :key="task.name">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import RemainingTasks from './components/RemainingTasks';

export default {
  // computed: {
  //   tasks() {
  //     return this.$store.state.tasks;
  //   }
  // }
  components:{RemainingTasks},
  computed: mapState(['tasks'])
}
</script>

<style>

</style>
