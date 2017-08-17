
new Vue({
    el: '#app',
    data: {
        message: '',
        open: false
    },
    methods: {
        update() {
            this.open = !this.open
        }
    }
})