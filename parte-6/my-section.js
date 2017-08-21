
Vue.component('my-section', {
    mixins: [
        mixin
    ],
    template: `<section :style="style">
                    <div class="fill"> 
                        My Section
                        <input type="text" v-model="model"> 
                    </div>
                </section>`,
    data: () => ({
        style: {
            background: 'yellow'
        },
        model: ''
    }),
    watch: {
        model () {
            this.$emit('input', this.model)
        }
    }
})