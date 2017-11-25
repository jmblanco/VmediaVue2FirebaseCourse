Vue.component('task-list', {
    props: ['tasks'],
    template:   `<div>
                    <h1>
                    <slot></slot>
                    </h1>
                    <ul>
                        <task v-for="task in tasks" :task="task"></task>
                    </ul>
                </div>`
});

Vue.component('task', {
    props: ['task'],
    template: `<li>{{ task }}</li>`
});

new Vue({
    el: 'main',
    data: {
        tasks: [
            'Go to the GYM',
            'Learn VueJS',
            'Learn Firebase'
        ]
    }
});