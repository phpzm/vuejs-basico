
Vue.component('my-main', {
    mixins: [ Mixin ],
    props: ['value'],
    template: `<main>
                    <div class="fill"> 
                        My Main <my-section :message="value" @input="$emit('input', $event)"></my-section> 
                   </div>
              </main>`
})