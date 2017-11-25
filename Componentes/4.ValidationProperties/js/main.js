Vue.component('candidate', {
    //props: ['name', 'email', 'image'],
    props: {
        name: {
            type: [String, Array], //null para cualquier valor
            required: true
        },
        email: {
            type: String,
            default: 'example@example.com'
        },
        image: String,
        //location: Object
        location: {
            type: Object,
            default() { // Para objectos debe devolver un objecto en una funcion
                return { city: 'Madrid' };
            }
        }
    },
    template: '#template-candidate'
});

const vm = new Vue({
    el: 'main',
    mounted(){
        this.getCandidates();
    },
    data: {
        candidates: []
    },
    methods: {
        getCandidates(){
            axios.get('https://randomuser.me/api/?results=100').then((response) => {
                this.candidates = response.data.results;
            });
        }
    }
});