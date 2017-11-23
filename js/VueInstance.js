var application = new Vue ( {
  data:{
    mainmenuoptions: ["black", "white", "red"],
    optiontext: cats,
    currenttext: "",
  },
  components: {
    'dropdownmenu': BaseDropdownMenu,
    'showimg': ShowImg
  }
}).$mount('#application');

application.$on ( 'menuSelect', function ( arg ) {
    this.currenttext = this.optiontext [ arg ];
})

application.$on ( 'mouseLeave', function ( ) {
    this.currenttext = "";
})

