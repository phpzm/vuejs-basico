
new Vue({
    el: '#app',
    data: {
        message: 'phpzm.rocks',
        open: false
    },
    computed: {
        reverse () {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        update() {
            this.open = !this.open
        }
    }
})