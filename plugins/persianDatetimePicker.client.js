import Vue3persianDatetimePicker from 'vue3-persian-datetime-picker'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('DatePicker', Vue3persianDatetimePicker)
})
