const OnEx = {
  data() {
    return {
      clickData: false,
      hoveData: false,
      classClickData: "specialBg",
      classHoverData: "",
      doubleClick: false,
      dataLeave: '' 
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
    }
  },
}
Vue.createApp(OnEx).mount('.on-ex')