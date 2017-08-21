
Vue.component('my-nav', {
    mixins: [
        mixin
    ],
    props: {
        message: {
            type: String,
            default: '~'
        },
    },
    template: `<nav><div class="fill"> <button @click="$emit('toggle')">#</button> {{ message }} </div></nav>`
})