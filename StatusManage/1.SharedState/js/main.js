const shared = {
    user: {
        name: 'Antonio Jose'
    }
};

new Vue({
    el: '#app1',
    data: shared
});

new Vue({
    el: '#app2',
    data: shared
});
