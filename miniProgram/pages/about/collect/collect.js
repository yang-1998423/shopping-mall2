// pages/collect/collect.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      collectlist:[
        {
          id:1,
          goodsName:"正义天使",
          price:"￥19",
          img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
          confirm:"ture"
         
        },
        {
          id:2,
          goodsName:"正义天使",
          price:"￥99",
          img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
          confirm:"ture"
        },
        {
          id:3,
          goodsName:"正义天使",
          price:"￥199",
          img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",
          confirm:"ture"
          
        },
        {
          id:4,
          goodsName:"正义天使",
          price:"￥19",
          img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
          confirm:"ture"
         
        }
      ],
      Iconcolor:"text-red"
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changecolor:function(e){
      let index=e.target.dataset.index
      // console.log(index)
      // console.log(this.data.collectlist[index].confirm)
      if(this.data.collectlist[index].confirm=='ture'){
        this.setData({
          [`collectlist[${index}].confirm`]:'false'
          })
      }else{
        this.setData({
          [`collectlist[${index}].confirm`]:'ture'
          })
      }

    }
  }
})
