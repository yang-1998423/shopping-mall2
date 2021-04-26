// const app = getApp()
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
  attached() {
      var that=this
     wx.request({
       url: 'http://localhost:8080/mydemo/firstclass/list',
       method:"GET",
       success:function(res){
         that.setData({
           cateItems:res.data.rows,
         }) 
         console.log(that.data.cateItems)
       }
     })
     wx.request({
       url: 'http://localhost:8080/mydemo/secondclass/list',
       method:"GET",
       data:{
         "cateid":that.data.curNav
       },
       success:function(res){
         that.setData({
           children:res.data.rows
         }),
         that.data.list=[]
         wx:for(var i=0;i<that.data.children.length;i++){
           if(1==that.data.children[i].cateId){
             that.setData({
               list:that.data.list.concat(that.data.children[i])
             })
           }
         }
       }
     })
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
  }
})