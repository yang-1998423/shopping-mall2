// pages/goods/goods.js
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
    hhh:[1,2],
   selectguige:{},
    cardCur: 0,
    openAttr: false,
    number:1,
    select_specification:[],
    subIndex:[], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
    goods:{
      /*规格表 */
      specification :[
      {
        detail: 0,
         id: 453, 
         name: "颜色", 
         pid: "48722", 
         showSizeTable: 1, 
         type: "color", 
         values: [{ id: 3951,name: "白色"},{ id: 3952,name: "黑色"},{ id: 3953,name: "黄色"}]
    }, 
    {
      detail: 0,
       id: 453, 
       name: "尺码", 
       pid: "51666", 
       showSizeTable: 1, 
       type: "size", 
       values: [{ id: 3911,name: "S"},{ id: 3912,name: "M"}]
    },
    /*{
      detail: 0,
       id: 453, 
       name: "样式", 
       pid: "51661", 
       showSizeTable: 1, 
       type: "size", 
       values: [{ id: 3917,name: "宽松"},{ id: 3917,name: "紧身"},{ id: 3927,name: "L"},{ id: 3937,name: "贴身"}]
    }  */
    ],
    /*sku表 用于与选中的商品进行比对的表 */
      sku_list:{
        '48722:3951;51666:3911':
          {id: 1018270,
            key: "535385_535692_552570",
            price: "20.00",
            productprice: "0.00",
            store_count: 0},
        '48722:3951;51666:3912':
          {id: 1018270,
            key: "535385_535692_552570",
            price: "20.00",
            productprice: "0.00",
            store_count: 20},
        '48722:3952;51666:3911':
          {id: 1018270,
            key: "535385_535692_552570",
            price: "20.00",
            productprice: "0.00",
            store_count: 20},
        '48722:3952;51666:3912':
        {id: 1018270,
          key: "535385_535692_552570",
          price: "20.00",
          productprice: "0.00",
          store_count: 20},
          '48722:3953;51666:3911':
            {id: 1018270,
              key: "535385_535692_552570",
              price: "20.00",
              productprice: "0.00",
              store_count: 10},
        '48722:3953;51666:3912':
          {id: 1018270,
            key: "535385_535692_552570",
            price: "20.00",
            productprice: "0.00",
            store_count: 0}
      },
      /*轮播图*/
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
          type: 'image',
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }],
      goods_description:'2021新款夏装法式复古裙短袖过膝流行裙子气质显瘦碎花雪纺连衣裙',
      evaluation:'挺好的',/*宝贝评价*/
      goods_detail_urls:['https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      ],
      goods_price:'15',
      goods_originl_price:'20', 
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
   
    },
    DotStyle(e) {
      this.setData({
        DotStyle: e.detail.value
      })
    },
    // cardSwiper
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
     // 页面分享
     shareFriendOrCircle: function() {
      //var that = this;
      if (this.data.openShare === false) {
        this.setData({
          openShare: !this.data.openShare
        });
      } else {
        return false;
      }
    },
    /*打开隐藏表单*/
    switchAttrPop: function() {
      var specification1=this.data.goods.specification
      for(var i=0;i<specification1.length;i++){
        for(var k=0;k<specification1[i].values.length;k++){
            specification1[i].values[k].isShow=true
        }
      }

      this.setData({
        'goods.specification':specification1
       });
      if (this.data.openAttr == false) {
        this.setData({
          openAttr: !this.data.openAttr,
        });
      }
      
      
    },
    /*关闭隐藏表单*/
    closeAttr: function() {
      this.setData({
        openAttr: false,
        selectguige:{},
        select_specification:[],
        subIndex:[]
      });
    },
    /*计数器的加减*/
    cutNumber: function() {
      this.setData({
        number: (this.data.number - 1 > 1) ? this.data.number - 1 : 1
      });
    },
    addNumber: function() {
      this.setData({
        number: this.data.number + 1
      });

    },
    // sku_choose:function(e){
    //   console.log(e.target.dataset.index)
    //   console.log(e.target.dataset.id)
    //   this.setData({
    //     // sku_list:this.data.sku_list.push("0")
    //   })
    //   console.log(this.data.sku_list)

    // },
    choose_specification:function(e){
      var parentindex=e.currentTarget.dataset.parentindex
      var childindex=e.currentTarget.dataset.childindex
      var pid=e.currentTarget.dataset.pid
      var childid=e.currentTarget.dataset.childid
      var select_specification=this.data.select_specification
      var subIndex=this.data.subIndex
      console.log(childid)
      
      if(select_specification[parentindex]=childid){
        select_specification[parentindex]=pid+":"+childid
        subIndex[parentindex]=childindex
        this.setData({
          subIndex:subIndex
        })
      }
      this.checksku()
    },
    checksku(){
      var sku_list=this.data.goods.sku_list
      var select_specification=this.data.select_specification
      var specification=this.data.goods.specification
      var result_key=''
      var select1={}
      var result=[]

      for (var i in specification) {
              result[i] = select_specification[i] ? select_specification[i] : "";
            }
      for (var i in specification) {
              var last = result[i];
              for (var k in specification[i].values) {
                result[i] = specification[i].pid+':'+specification[i].values[k].id; 
                specification[i].values[k].isShow = this.isEmporty(result);  
              }
              result[i] = last;
            }
        this.setData({
          'goods.specification':specification
         });
        console.log(this.data.goods.specification)

      if(select_specification.length==specification.length){
        result_key=this.zifupinjie(select_specification)
        select1=sku_list[result_key]
        this.setData({
          selectguige:select1
        })
      }else{console.log(result.length)}
    },
    isEmporty(result){
      for (var i in result) {
              if (result[i] == "") {
                return true; 
              }
            }
            var key=this.zifupinjie(result)
            console.log(key)
            return !this.data.goods.sku_list[key] ?
              false :
              this.data.goods.sku_list[key].store_count == 0 ?
              false :
              true; //匹配选中的数据的库存，若不为空返回true反之返回false
      
    },
    zifupinjie(res){
      var result=''
      for(var i in res){
        result=result+';'+res[i]
    }
    result=result.trim().substr(1).trim()
    return result
    }
}
})
