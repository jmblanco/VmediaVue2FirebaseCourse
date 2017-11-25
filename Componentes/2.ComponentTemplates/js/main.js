Vue.component('choose-winner', {
    props: ['list'],
    template: '#chooseWinnerTemplate',
    // template: ` 
    //             <div>
    //                 <h1 v-if="winner">The winner is: {{ winner }}</h1>
    //                 <template v-else>
    //                     <p>Persons:</p>
    //                     <ul>
    //                         <li v-for="person in list">{{ person }}</li>
    //                     </ul>
    //                 </template>
    //                 <button @click="chooseWinner">Choose Winner!!!</button>
    //             </div>
    //             `,
    methods: {
        chooseWinner(){
            let size = this.participants.length;
            let index = Math.floor(Math.random() * size);
            this.winner = this.participants[index-1];
        }
    },
    data() {
        return {
            winner: false,
            participants: this.list
        };
    }
});

const vm = new Vue({
    el: 'main',
    data: {
        persons: [
            'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
        ]
    }
});