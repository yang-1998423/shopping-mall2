// pages/shoppingcart/home/home.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [
      {
        cart_id: 1, //商品ID
        name: '特色黄山烧饼', //商品名称
        quantity: 1, //商品数量
        specs: [{
            value: '微辣； 5个/袋'
          },
          {
            value: '特辣； 5个/袋'
          }
        ],
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0319%252Fd3b308b4j00qq7a9w001tc000hs00b5c.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621761133&t=28ac1a36f232321243cd1daff358525d', //商品图片
        price: 9.8, //商品价格
        checks: false //是否选中
      },
      {
        cart_id: 2, //商品ID
        name: '香辣鸡腿堡', //商品名称
        quantity: 1, //商品数量
        specs: [{
            value: '微辣'
          },
          {
            value: '特辣'
          }
        ],
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F23%2F31%2F57%2F591e95960892a.png%21%2Ffwfh%2F750x750%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621905333&t=ed31b7e0bb51648da345a60a421878e4', //商品图片
        price: 19.8, //商品价格
        checks: false //是否选中
      },
      {
        cart_id: 3, //商品ID
        name: '特色鸡排', //商品名称
        quantity: 1, //商品数量
        specs: [{
            value: '微辣'
          },
          {
            value: '特辣'
          }
        ],
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg001.hc360.cn%2Fg2%2FM07%2F6E%2F0E%2FwKhQuVJzDGiEfgGaAAAAAERNXIM148.jpg&refer=http%3A%2F%2Fimg001.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621905333&t=e9222f53c0e7efa98c4364cdbaf7204e', //商品图片
        price: 8.8, //商品价格
        checks: false //是否选中
      },
      {
        cart_id: 4, //商品ID
        name: '烤肠', //商品名称
        quantity: 1, //商品数量
        specs: [{
            value: '微辣'
          },
          {
            value: '特辣'
          }
        ],
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg004.hc360.cn%2Fhb%2FMTQ3NTI2NzMyOTcxNTEzMjAwMDQ0NzU%3D.jpg&refer=http%3A%2F%2Fimg004.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621905333&t=9da6d60fe46bbe5ff4b47baf114bad73', //商品图片
        price: 1.8, //商品价格
        checks: false //是否选中
      },
      {
        cart_id: 5, //商品ID
        name: '休闲食品', //商品名称
        quantity: 1, //商品数量
        specs: [{
            value: '微辣'
          },
          {
            value: '特辣'
          }
        ],
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.16pic.com%2F00%2F38%2F28%2F16pic_3828970_b.jpg&refer=http%3A%2F%2Fphoto.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621905333&t=8e2a873cff6485d50161e7d347d71716', //商品图片
        price: 9.8, //商品价格
        checks: false //是否选中
      },
      {
        cart_id: 6, //商品ID
        name: '韩式盖浇', //商品名称
        quantity: 1, //商品数量
        specs: [{
            value: '微辣'
          },
          {
            value: '特辣'
          }
        ],
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jshddq.net%2FUploadFiles%2Fimg_0_4067635953_252261443_26.jpg&refer=http%3A%2F%2Fwww.jshddq.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621905333&t=64f7249122ed57cc2b0bff74298197c3', //商品图片
        price: 11.8, //商品价格
        checks: false //是否选中
      },{
        cart_id: 7, //商品ID
        name: '生日蛋糕', //商品名称
        quantity: 1, //商品数量
        specs: [{
            value: '草莓'
          },
          {
            value: '百香果'
          }
        ],
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.huahuibk.com%2Fuploads%2F20190228%2F23%2F1551367998-ZNtFvCeuhD.jpg&refer=http%3A%2F%2Fimage.huahuibk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621906458&t=ab6001b2aea0c77e427e527396f4f6c6', //商品图片
        price: 99.8, //商品价格
        checks: false //是否选中
      }
    ], 
  },
  attached: function() {
    console.log('attached')
  }
})