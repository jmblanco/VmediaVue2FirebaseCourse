<template>
  <div>
      <h1>Finished tasks: {{ finishedTasks }}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    // computed: {
    //     finishedTasks(){
    //         //return this.$store.state.tasks.filter((store) => store.finished).length;

    //         return this.$store.getters.finishedTasks;
    //     }
    // }
    computed: mapGetters(['finishedTasks'])
}
</script>

<style>

</style>
