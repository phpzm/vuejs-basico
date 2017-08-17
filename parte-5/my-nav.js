
Vue.component('my-nav', {
    props: {
        message: {
            type: String,
            default: 'App title'
        },
    },
    template: `<nav><div class="fill"> <button @click="$emit('toggle')">#</button> {{ message }} </div></nav>`
})