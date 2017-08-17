
Vue.component('my-aside', {
    template: `<aside v-html="title"></aside>`,
    data: () => ({
        title: 'My <b>Beauty</b> Aside'
    })
})