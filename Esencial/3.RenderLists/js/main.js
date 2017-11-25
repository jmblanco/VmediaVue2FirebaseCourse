const vm = new Vue({
    el: 'main',
    data: {
        workingDays: ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday'],
        tasks:  [
            {name: 'Learn VueJS and Firebase', priority: 'medium'},
            {name: 'Go Shopping', priority: 'low'},
            {name: 'Go to the Gym', priority: 'hight'},
        ],
        person: {
            name: 'Chemy',
            profesion: 'Developer',
            city: 'Madrid'
        }
    }
});