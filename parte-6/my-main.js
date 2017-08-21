
Vue.component('my-main', {
    mixins: [ Mixin ],
    template: `<main><div class="fill"> My Main <my-section @input="$emit('input', $event)"></my-section> </div></main>`
})