import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [
            {name: 'Learn Vue Routing', finished: false},
            {name: 'Order next sessions', finished: false},
            {name: 'Rec lessons about ES6', finished: false},
            {name: 'Prepare the landing page of the course', finished: false}
        ]  
    },
    getters: {
        finishedTasks: (state) => {
            return state.tasks.filter((task) => task.finished).length;
        }
    }
});