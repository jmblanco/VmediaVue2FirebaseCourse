import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        name: 'Antonio Paco',
        last: 'Acapulco',
        profession: 'Developer',
        city: 'Manhatan'
    }
});