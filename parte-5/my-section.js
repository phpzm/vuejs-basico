
Vue.component('my-section', {
    template: `<section :style="style">
                    <div class="fill">
                        <input type="text" @input="$emit('input', $event.target.value)">
                    </div>
                </section>`,
    data: () => ({
        style: {
            background: 'yellow'
        }
    })
})