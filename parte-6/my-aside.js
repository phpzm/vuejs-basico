
Vue.component('my-aside', {
    mixins: [
        mixin
    ],
    props: ['message'],
    template: `<aside v-html="message"></aside>`
})