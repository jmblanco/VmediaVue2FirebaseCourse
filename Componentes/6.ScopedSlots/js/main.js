Vue.component('my-tasks', {
    props: ['list'],
    template: '#template-my-tasks'
});

const vm = new Vue({
    el: 'main',
    data: {
        tasks: [
            {title: 'Go run!'},
            {title: 'Dish the house!'},
            {title: 'Learn VueJS!'},
            {title: 'Go to the Gym!'},
            {title: 'Read every day!'},
        ]
    }
});