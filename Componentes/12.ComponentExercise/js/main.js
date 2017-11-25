Vue.component('search', {
    props: ['searchValue'],
    template: `<input :value="searchValue" @input="this.$emit('input', $event.target.value)">`
});

Vue.component('users', {
    template: '#users-template',
    mounted() {
        axios.get('https://randomuser.me/api/?results=500').then((response) => {
            this.users = response.data.results.map((user) => {
                return {
                    fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
                    email: user.email,
                    photo: user.picture.medium
                }
            });
        });
    },
    data() {
        return {
            users: [],
            usersFilter: ''
        };
    },
    computed: {
        filteredUsers() {
            return this.users.filter((user) => user.fullName.includes(this.usersFilter));
        }
    }
});

Vue.component('user', {
    props: ['user'],
    template: '#user-template'
});


new Vue({
    el: 'main'
    
});