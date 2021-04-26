// const app = getApp()
Component({
  data: {
    cateItems:[
      // {
      //   cate_id:1,
      //   cate_name:'',
      //   children: [
      //     { 
      //       child_id: 1, 
      //       name: '洁面皂', 
      //       image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" 
      //     }, 
      //     { 
      //       child_id: 2, 
      //       name: '卸妆', 
      //       image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg"  
      //     }
      //   ]
      // },
      // {
      //   cate_id:2,
      //   cate_name:'',
      //   children: [
      //     { 
      //       child_id: 1, 
      //       name: '龙虾', 
      //       image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg" 
      //     }, 
      //     { 
      //       child_id: 2, 
      //       name: '鲍鱼', 
      //       image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg"  
      //     }
      //   ]
      // },
      // {
      //   cate_id:3,
      //   cate_name:''
      // },
      // {
      //   cate_id: 4,
      //   cate_name: ''
      // },
      // {
      //   cate_id: 5,
      //   cate_name: ''
      // },
      // {
      //   cate_id: 6,
      //   cate_name: ''
      // },
      // {
      //   cate_id: 7,
      //   cate_name: ''
      // }
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
         console.log("一级成功")
         console.log(res.data.rows)
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
         console.log("二级成功")
         console.log(res.data.rows)
         that.setData({
           children:res.data.rows
         }),
        //  console.log(that.data.children.length)
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
      // console.log(id)
      // console.log(index)
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
      console.log("提取成功")
      console.log(this.data.list)
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
  // onLoad() {
  //   wx.showLoading({
  //     title: '加载中...',
  //     mask: true
  //   });
  //   let list = [{}];
  //   for (let i = 0; i < 26; i++) {
  //     list[i] = {};
  //     list[i].name = String.fromCharCode(65 + i);
  //     list[i].id = i;
  //   }
  //   this.setData({
  //     list: list,
  //     listCur: list[0]
  //   })
  // },
  // onReady() {
  //   wx.hideLoading()
  // },
  // tabSelect(e) {
  //   this.setData({
  //     TabCur: e.currentTarget.dataset.id,
  //     MainCur: e.currentTarget.dataset.id,
  //     VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
  //   })
  // },
  // VerticalMain(e) {
  //   let that = this;
  //   let list = this.data.list;
  //   let tabHeight = 0;
  //   if (this.data.load) {
  //     for (let i = 0; i < list.length; i++) {
  //       let view = wx.createSelectorQuery().select("#main-" + list[i].id);
  //       view.fields({
  //         size: true
  //       }, data => {
  //         list[i].top = tabHeight;
  //         tabHeight = tabHeight + data.height;
  //         list[i].bottom = tabHeight;    
  //       }).exec();
  //     }
  //     that.setData({
  //       load: false,
  //       list: list
  //     })
  //   }
  //   let scrollTop = e.detail.scrollTop + 20;
  //   for (let i = 0; i < list.length; i++) {
  //     if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
  //       that.setData({
  //         VerticalNavTop: (list[i].id - 1) * 50,
  //         TabCur: list[i].id
  //       })
  //       return false
  //     }
  //   }
  // }
})