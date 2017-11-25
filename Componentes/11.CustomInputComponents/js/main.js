Vue.component('password', {
    props: ['password'],
    template: `<input :value="password" @input="verifyPassword($event.target.value)" ref="pass">`,
    methods: {
        verifyPassword(password) {
            if(this.notValidPass.includes(password)){
                this.$refs.pass.value = password = '';
            }
            this.$emit('input', password);
        }
    },
    data() {
        return {
            notValidPass: ['abc', 'admin', '123456', 'root']
        };
    }
});

new Vue({
    el: 'main',
    data: {
        password: 'es3Es653!*&__',
    },
});