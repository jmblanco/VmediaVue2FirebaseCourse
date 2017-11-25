Vue.component('my-tasks', {
    //props: ['tasks'],
    template: '<ul><li v-for="task in tasks">{{ task.title }}</li></ul>',
    data() {
        return {
            tasks: [],
            localTasks: [
                { title: 'Test local task' }
            ]
        };
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
            this.tasks = response.data;
        })
    }
});

const vm = new Vue({
    el: 'main',
    // data: {
    //     tasks: [],
    //     localTasks: [
    //         { title: 'Test local task' }
    //     ]
    // },
    // mounted() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
    //         this.tasks = response.data;
    //     })
    // }
});