Vue.component('task-list', {
    data() {
        return {
            tasks: [
                'Go to the GYM',
                'Learn VueJS',
                'Learn Firebase'
            ]
        }
    },
    template:   `<div>
                    <h1>
                    <slot></slot>
                    </h1>
                    <ul>
                        <task v-for="task in tasks" :task="task" :key="task"></task>
                    </ul>
                </div>`
});

Vue.component('task', {
    props: ['task'],
    template: `<li>{{ task }}</li>`
});

Vue.component('contact', {
    template: `<div><a href="mailto:example@wmedia.es">example@wmedia.es</a> <hr></div>`,
 });
 
 Vue.component('bio', {
     template: `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet magna quis maximus. Vivamus eget consectetur tellus. Sed diam ante, dictum sit amet tincidunt ac, facilisis eget dui. </p><hr></div>`,
 });

new Vue({
    el: 'main',
    data: {
        currentComponent: 'task-list'
    }
});