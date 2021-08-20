const FunIf = {
  data() {
    return {
      fun: ''
    }
  },
}
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increase(){
      this.counter++;
      if(this.counter >= 10){
        this.counter = 0;
      }
    }
  },
}

const LikeChecking = {
  data() {
    return {
      isLike: '',
    }
  },
}


Vue.createApp(FunIf).mount('#fun-if')
Vue.createApp(Counter).mount('#counter')
Vue.createApp(LikeChecking).mount('.fun-if-else')
