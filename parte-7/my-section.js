
Vue.component('my-section', {
    mixins: [ Mixin ],
    props: ['message'],
    template: `<section :style="style">
                    <div class="fill"> 
                        My Section
                        {{ reverse }}
                        <input type="text" v-model="model"> 
                    </div>
                </section>`,
    data: () => ({
        style: {
            background: 'yellow'
        },
        model: ''
    }),
    computed: {
        reverse () {
            return this.model.split('').reverse().join('')
        }
    },
    mounted () {
      this.model = this.message
    },
    watch: {
        model () {
            this.$emit('input', this.model)
        }
    }
})