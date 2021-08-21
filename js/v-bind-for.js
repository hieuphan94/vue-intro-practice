const BindEx = {
  data() {
    return {
      fun: '',
      activeClass: 'active'
    }
  },
}
const ForEx2 = {
  data() {
    return {
      funs: [
        1, "d333", "dasd"
      ]
    }
  },
}
Vue.createApp(BindEx).mount('.bind-ex')
Vue.createApp({}).mount('.for-ex')
Vue.createApp(ForEx2).mount('.for-ex2')