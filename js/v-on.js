const OnEx = {
  data() {
    return {
      clickData: false,
      hoveData: false,
      classClickData: "specialBg",
      classHoverData: "",
      doubleClick: false,
      dataLeave: '',
      x: '',
      y: '' 
    }
  },
  methods: {
    onClickHandle(){
      this.clickData = !this.clickData
    },
    onHoverHandle(){
      this.classHoverData = "specialBg"
    },
    onLeaveHandle(){
      this.classHoverData = ""
    },
    onDoubleClickHandle(){
      this.doubleClick = !this.doubleClick
    },
    onMouseLeaveHandle(){
      this.dataLeave = "adasd"
    },
    mouseMoveHandle(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  },
}
Vue.createApp(OnEx).mount('.on-ex')