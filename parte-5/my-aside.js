
Vue.component('my-aside', {
    props: ['message'],
    template: `<aside v-html="message"></aside>`
})