// const app = getApp()
const network = require('../../utils/network.js')
Component({
  data: {
    cateItems:[
      // cateId:
      // cateName:
    ],
    children:[],
    list:[],
    curNav:1,
    curIndex:0,
    PageCur:"category"
  },
  methods:{
    switchRightTab:function(e){
      let id = e.target.dataset.id,index=e.target.dataset.index;
      this.data.list=[]
      var i=0
      console.log(this.data.children.length)
      wx:for(i;i<this.data.children.length;i++){
        if(id==this.data.children[i].cateId){
          this.setData({
            list:this.data.list.concat(this.data.children[i])
          })
        }
      }
      if(this.data.list.length==0){
        this.setData({
          list:[],
          curNav:id,
          curIndex:index
        })
      }
      this.setData({
        curNav:id,
        curIndex:index
      })
    },
  },
  attached: function() {
    var that=this
    network.request('mydemo/firstclass/list', {}, function(res) {
      console.log(res.rows)
      that.setData({
           cateItems:res.rows,
      }) 
      console.log(res)
    }, 'GET', true);
    network.request('mydemo/secondclass/list', {}, function(res) {
      console.log(res.rows)
      that.setData({
        children:res.rows,
      }) ,
      that.data.list=[]
      wx:for(var i=0;i<that.data.children.length;i++){
        if(1==that.data.children[i].cateId){
          that.setData({
            list:that.data.list.concat(that.data.children[i])
            })
          }
      }
      console.log(res)
    }, 'GET', true);
  }
  
})