const vm = new Vue({
    el: 'main',
    data: {
        message: 'Hello World!!!',
        newTask: '',
        tasks: [
            {title: 'Learn VueJS and Firebase', priority: true, liveTime: 10},
            {title: 'Go Shopping', priority: false, liveTime: 30},
            {title: 'Go to the GYM', priority: true, liveTime: 5}
        ]
    },
    methods: {
        addTask () {
            
        }
    },
    computed: {
        reverseMessage () {
            return this.message.split('').reverse().join('');
        },
        tasksWithPriority () {
            return this.tasks.filter((task) => task.priority);
        },
        tasksByLiveTime() {
            return this.tasks.sort((a,b) => b.liveTime - a.liveTime);
        }
    }
});
