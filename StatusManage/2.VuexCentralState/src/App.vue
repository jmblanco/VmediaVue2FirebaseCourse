<template>
  <!-- <counter :counter="counter"
            @increase="counter++"
            @decrease="counter--">
  </counter> -->
  <counter></counter>
</template>

<script>
import counter from './components/Counter.component';

export default {
  components: {
    counter
  },
  // data(){
  //   return {
  //     counter: 0
  //   };  
  // }
}
</script>

<style>
</style>
