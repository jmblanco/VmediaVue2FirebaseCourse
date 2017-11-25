Vue.component('alert', {
    props: ['type', 'position'],
    template: `<section class="alert" :class="[type, position]">
                    <header class="alert__header">
                        <slot name="header">
                        This is the header
                        </slot>
                    </header>
                    <div class="alert__containt">
                        <slot name="content">
                        Lorem ipsum dolor sit amet, consectetur adipising elit. Vivamus dictum dui just vitae
                        </slot>
                    </div>
                    <footer class="alert__footer">
                        <slot name="footer">
                        This is the footer
                        </slot>
                    </footer>
                </section>`
});

const vm = new Vue({
    el: 'main'
});