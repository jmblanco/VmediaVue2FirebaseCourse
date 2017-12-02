<template>
    <section>
        <h1>Counter: {{ counter }}</h1>
        <hr>
        <button @click="increase()">+</button>
        <button @click="increaseBy(10)">+10</button>
        <button @click="decrease()">-</button>
    </section>
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default {
    computed: mapState(['counter']),
    // methods:{
    //     increase(){
    //         //this.$store.state.counter++;
    //         this.$store.commit('increase');
    //     },
    //     decrease(){
    //         //this.$store.state.counter--;
    //         this.$store.commit('decrease');
    //     }
    // }
    methods: {
        ...mapMutations(['increase', 'decrease']),
        increaseBy(amount){
            this.$store.commit('increase', amount);
        }
    }
}
</script>

<style>

</style>
