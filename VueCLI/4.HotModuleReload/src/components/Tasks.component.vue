<template>
    <div>
        <h2>Task for done</h2>
        <ul>
            <li style="cursor:pointer" v-for="task in unfinishedTasks" :key="task.name" @click="task.completed = true">{{ task.name}}</li>
        </ul>
        <hr>
        <h2>Task finished</h2>
        <ul>
            <li style="cursor:pointer" v-for="task in finishedTasks" :key="task.name" @click="task.completed = false">{{ task.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tasks: [
                {name: 'Learn Vuejs', completed: false},
                {name: 'Rec Vuejs moduel about vuex', completed: false},
                {name: 'Response comments', completed: false},
                {name: 'Design firebase module', completed: false}
            ]
        }
    },
    computed: {
        unfinishedTasks(){
            return this.tasks.filter((task) => !task.completed);
        },
        finishedTasks(){
            return this.tasks.filter((task) => task.completed);
        }
    }
}
</script>

<style>
li {
    color: darkgoldenrod;
    font-weight: bold;
    text-decoration: none;
}
</style>
