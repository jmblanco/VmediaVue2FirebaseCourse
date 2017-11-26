<template>
    <div>
        <h1>Counter: {{ counter }}</h1>
        <button @click="increase">Increase</button>
        <button @click="decrease">Decrease</button>
    </div>
</template>
<script>
export default {
    //props: ['counter'],
    methods: {
        increase(){
            //this.$emit('increase');
            this.$store.state.counter++;
        },
        decrease(){
            //this.$emit('decrease');
            this.$store.state.counter--;
        }
    },
    computed: {
        counter(){
            return this.$store.state.counter;
        }
    }
}
</script>

