
Vue.component('my-aside', {
    mixins: [ Mixin ],
    props: ['message'],
    template: `<aside v-html="message"></aside>`
})