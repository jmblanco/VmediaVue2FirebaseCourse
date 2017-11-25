const vm = new Vue({
    el: 'main',
    data: {
        searchStr: '',
        minScore: 5,
        games: [
            {title: 'Battlefield', genre: 'FPS', score: 9},
            {title: 'Civilization V', genre: 'Stratagy', score: 10},
            {title: 'Resident Evil 7', genre: 'Survival Horror', score: 7}
        ]
    },
    methods: {

    },
    computed: {
        bestGames(){
            return this.games.filter((game) => game.score >= this.minScore);
        },
        searchGame() {
            return this.games.filter((game) => game.title.includes(this.searchStr))
        }
    }
});
