
Vue.component('my-section', {
    template: `<section :style="style"> <div class="fill">My Section</div> </section>`,
    data: () => ({
        style: {
            background: 'yellow'
        }
    })
})