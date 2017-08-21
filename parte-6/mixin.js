const Mixin = {
    beforeCreate () {
        console.log('beforeCreate: ', this.$options.name)
    },
    created () {
        console.warn('created: ', this.$options.name)
    },
    beforeMount () {
        console.log('beforeMount: ', this.$options.name)
    },
    mounted () {
        console.warn('mounted: ', this.$options.name)
    },
    beforeUpdate () {
        console.warn('beforeUpdate: ', this.$options.name)
    },
    updated () {
        console.error('updated: ', this.$options.name)
    },
    beforeDestroy () {
        console.log('beforeDestroy: ', this.$options.name)
    },
    destroyed () {
        console.warn('destroyed: ', this.$options.name)
    }
}