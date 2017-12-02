<template>
  <div>
    <h1>Hi my name is: {{ name }} {{ last }} and I work as {{ profession }}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  // computed: {
  //   name() {
  //     return this.$store.state.name;
  //   }
  // }
  // computed: mapState({
  //   name: (state) => state.name,
  //   last: (state) => state.last
  // })
  computed: mapState(['name', 'last', 'profession', 'city'])
}
</script>
