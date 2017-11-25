const vm1 = new Vue({
    el: 'main',
    data: {
       tasks: [
        {title: 'Go shopping', completed: false},
        {title: 'Learn Vue.js', completed: false},
        {title: 'Learn Firebase', completed: false},
        {title: 'Expertise ES6', completed: false},
        {title: 'Go run!', completed: false},
       ]
    },

    methods: {
        completeTask(task){
           task.completed = !task.completed;
        }
    },

    computed: {
        completedTasks() {
            var completedTasks =  this.tasks.filter((task) => task.completed).map();
            return completedTasks.length;
        }
    }
});
