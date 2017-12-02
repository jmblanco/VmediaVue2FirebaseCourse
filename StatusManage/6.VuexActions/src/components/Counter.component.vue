<template>
    <section>
        <h1>Counter: {{ counter }}</h1>
        <hr>
        <button @click="increase()">+</button>
        <button @click="increaseBy(10)">+10</button>
        <button @click="decrease()">-</button>
        <button @click="decreaseBy(10)">-10</button>
        <hr>
        <button @click="increaseAsync(12)">+ (async)</button>
        <button @click="decreaseAsync({amount: 15})">- (async)</button>
    </section>
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
    computed: mapState(['counter']),
    methods: {
        ...mapMutations(['increase', 'decrease']),
        increaseBy(amount){
            this.$store.commit('increase', amount);
        },
        decreaseBy(amount){
            this.$store.commit('decrease', amount);
        },
        // increaseAsync() {
        //     this.$store.dispatch('increaseAsync');
        // },
        // decreaseAsync() {
        //     this.$store.dispatch('decreaseAsync');
        // }
        ...mapActions(['increaseAsync','decreaseAsync'])
    }
}
</script>

<style>

</style>
