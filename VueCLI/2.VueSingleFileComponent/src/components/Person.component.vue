<template>
    <div>
        <template v-if="person">
            <h1 v-text="computedPerson.name"></h1>
            <h2 v-text="computedPerson.email"></h2>
            <img :src="computedPerson.photo">
        </template>
        <span v-else>Loading Person...</span>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted(){
        axios.get('https://randomuser.me/api').then((response) => {
            this.person = response.data.results[0];
        });
    },
    data(){
        return {
            person: null
        }
    },
    computed:{
        computedPerson(){
            return {
                name: `${this.person.name.first} ${this.person.name.last}`,
                email: this.person.email,
                photo: this.person.picture.large
            }
        }
    }
}
</script>

<style>
</style>

