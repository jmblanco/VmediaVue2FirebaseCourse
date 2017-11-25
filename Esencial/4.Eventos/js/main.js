const vm = new Vue({
    el: 'main',
    data: {
        newTask: '',
        tasks: [
            'Learn VueJS and Firebase',
            'Go Shopping',
            'Go to the Gym'
        ]
    },
    methods: {
        addTask () {
            console.log('Its working!!!');
            this.tasks.unshift(this.newTask);
            this.newTask='';
        }
    }
});

function addTask() {
    const input = document.querySelector('input[type=text]');
    vm.tasks.unshift(input.value);
    input.value = '';
}