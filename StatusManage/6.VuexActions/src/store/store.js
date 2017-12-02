import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations:{ //MUST BE SYNC!!!!
        increase: (state, amount) => { //method with payload (can be objects too :D)
            if(amount){
                state.counter += amount;
            }else{
                state.counter++;
            }
        },
        decrease: (state, amount) => {
            if(amount){
                state.counter -= amount;
            }else{
                state.counter--;
            }
        }
    },
    actions: { //ASYNC
        increaseAsync: (context, amount) => {
            setTimeout(() => context.commit('increase', amount), 2000);
        },
        // decreaseAsync: (context, value) => {
        //     setTimeout(() => context.commit('decrease', value.amount), 2000);
        // }
        decreaseAsync: ({commit}, {amount}) => {
            setTimeout(() => commit('decrease', amount), 2000);
        }
    }
});