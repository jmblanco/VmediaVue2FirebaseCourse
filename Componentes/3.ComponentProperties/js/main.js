Vue.component('author', {
    props:['name', 'age'],
    mounted(){
        console.log(this.name);
    },
    template: `<div><h1>{{ componentName }}</h1><button @click="changeName()">Change Name</button></div>`,
    data() {
        return {
            componentName: this.name
        };
    },
    methods: {
        changeName(){
            this.componentName = this.componentName.toUpperCase();
        }
    }
});

const vm = new Vue({
    el: 'main',
    data: {
        author: 'Jose Miguel'
    }
});