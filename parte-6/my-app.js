
new Vue({
    el: '#app',
    data: {
        message: 'phpzm.rocks',
        open: false
    },
    methods: {
        update() {
            this.open = !this.open
        }
    }
})