const Counter = {
  data() {
    return {
      counter: 0 
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

const EventHandling = {
  data() {
    return {
      message: "Hello, Vue JS"
    }
  },
  methods: {
    reverseMessage(){
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

const ListRendering = {
  data(){
    return {
      todos: [
        {text: 'Hello'},
        {text: 'My name is Hieu'},
        {text: '28 years old'}
      ]
    }
  }
}

const ModelRendering = {
  data(){
    return {
      message: ''
    }
  }
}

const ModelCheckBoxRendering = {
  data(){
    return {
      checked: false
    }
  }
}

const ModelMultiCheckboxRendering = {
  data(){
    return {
      checkedNames: [], 
      options: [
        {value: 'John'},
        {value: 'jas'},
        {value: 'jca'},
      ]
    }
  }
}

const SelectDynamic = {
  data(){
    return {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}


Vue.createApp(Counter).mount('#counter')
Vue.createApp(EventHandling).mount('#event-handling')
Vue.createApp(ListRendering).mount('#list-rendering')
Vue.createApp(ModelRendering).mount('#v-model-example')
Vue.createApp(ModelCheckBoxRendering).mount('#v-model-checkbox')
Vue.createApp(ModelCheckBoxRendering).mount('#v-model-checkbox')
Vue.createApp(SelectDynamic).mount('#v-model-select-dynamic')
Vue.createApp(ModelMultiCheckboxRendering).mount('#v-model-multi-checkbox')