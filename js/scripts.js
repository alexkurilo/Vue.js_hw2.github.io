Vue.component ( 'comp-picture', {
  props: [ "arr" ],
  template:`
    <div>
      <div  v-for = "item in arr" :key="item.id">
        <img :src="item.pict">
        <span>{{ item.pict }}
        </span>
      </div>
    </div>`,
  methods: 
})

var sample = new Vue ({
  el: '#demopicture',
  data: {
    pictures: [ 
      { id:0, pict:'http://mirpozitiva.ru/uploads/posts/2016-09/1474011186_02.jpg' },
      { id:1, pict:'http://mirpozitiva.ru/uploads/posts/2016-09/1474011164_27.jpg' },
      { id:2, pict:'http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg' }
    ]
  }
})