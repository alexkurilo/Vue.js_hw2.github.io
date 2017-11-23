var BaseDropdownMenu = ('dropdownmenu', {
  props: {
    options: {
      type: Array,
      required: true,
      validator: function (){
        return this
      }
    }
  },
  data: function () {
    return {
      visiblestatus: false,
      visiblestatusimg: false
    }
  },
  methods: {
    changemenuvisibility: function (event){
      this.visiblestatus = !this.visiblestatus;
    },
    selectoptionhandler: function (event){
      this.$parent.$emit ('menuSelect', event.target.innerHTML.trim() );
    },
    exitimg: function(){
      this.$parent.$emit ('mouseLeave')
    }
  },
  template: `
    <div>
      <button class="dropdownmenubutton" @click = "changemenuvisibility" >
        Change cats
      </button>
      <div class= "leftdropdownmenu">
        <div class="dropdownitem" v-if = "visiblestatus" v-for = "item in options" @mouseenter = "selectoptionhandler" @mouseleave = "exitimg">
          {{item}}
        </div>

      </div>
    </div>
  `
})

var ShowImg = ('showimg', {
  props: ["currenttext"],
  template:`
    <img class="imgcat">
  `,
})