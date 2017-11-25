const vm1 = new Vue({
    el: 'main',
    data: {
        message: 'Vue Instance 1º'
    },

    beforeUpdate(){
        console.log('BeforeUpdate:', this.message);
    },
    updated(){
        console.log('Updated:', this.message);
    },

    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
            vm2.message = 'Hi from instance 1!!!'
        }
    },
    computed: {
        messageUpperCase() {
            return this.message.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    el: '#app',
    data: {
        message: 'Vue Instance 2º'
    }
});