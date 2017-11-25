Vue.prototype.$http = axios;

const vm1 = new Vue({
    el: 'main',
    data: {
        persons: []
    },
    mounted(){
        this.loadPersons();
    },
    methods: {
        async loadPersons(){
            // var response = await this.$http.get('https://randomuser.me/api/?results=5000');
            // console.log(response);
            // this.persons = response.body.results;

            // var response = await axios.get('https://randomuser.me/api/?results=5000');
            // this.persons = response.data.results;
        
            var response = await this.$http.get('https://randomuser.me/api/?results=5000');
            console.log(response);
            this.persons = response.data.results;
        }
    }
});
