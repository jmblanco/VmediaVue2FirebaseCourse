import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations:{
        increase: (state, amount) => {
            if(amount){
                state.counter += amount;
            }else{
                state.counter++;
            }
        },
        decrease: (state) => {
            state.counter--;
        }
    }
});