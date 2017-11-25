//Event Bus
var eventBus = new Vue();

Vue.component('list', {
    props: ['list'],
    template:   `<section>
                <ul>
                    <li v-for="item in list">
                        {{ item.name }}
                        <small>{{ item.price.toFixed(2) }}</small>
                        <button @click="removeItem(item.price)">-</button>
                        <button @click="addItem(item.price)">+</button>
                    </li>
                </ul>
                </section>`,
    methods: {
        addItem(price) {
            eventBus.$emit('addItemEvent', price);
        },
        removeItem(price) {
            eventBus.$emit('removeItemEvent', price);
        }
    }
});

Vue.component('shooping-cart', {
    template:   `<section>
                    <h1>{{ totalPrice.toFixed(2) }} €</h1>
                    <h3>Products in cart: {{ productCount }}</h3>
                </section>`,
    created(){
        eventBus.$on('addItemEvent', (price) => {
            this.totalPrice += price;
            this.productCount++;
        });
        eventBus.$on('removeItemEvent', (price) => {
            if(this.productCount > 0){
                this.totalPrice -= price;
                this.productCount--; 
            }
        });
    },
    data () {
        return {
            productCount: 0,
            totalPrice: 0
        }
    }
});

const vm = new Vue({
    el: 'main',
    data: {
        products: [
            {name: 'ES6 Book', price: 39},
            {name: 'Coffee', price: 2},
            {name: 'Laptop', price: 1300},
            {name: 'Headphones', price: 80},
            {name: 'Moleskine', price: 19},
        ]
    }
});