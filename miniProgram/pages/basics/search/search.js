const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    cartList: [
      {
        name: '糯米锅巴零食', //商品名称
        introduct:'网红蟹黄锅巴蟹香咸蛋黄锅巴糯米锅巴整箱散装小包装手工休闲零食 ',//商品介绍
        image: 'https://img.alicdn.com/imgextra/i3/2206414857487/O1CN01i6Q1KK25B60jkg0Cl_!!2206414857487.jpg', //商品图片
        price: ' 20 /箱', //商品价格
      },
      {
        name: '芒果干', //商品名称
        introduct:'【进口】越南榙榙芒果干50g蜜饯果脯水果干网红休闲零食小吃特产 ',//商品介绍
        image: 'https://img.alicdn.com/imgextra/i1/2200631503611/O1CN011n3bmi1cXsmjFWINL_!!2200631503611-0-scmitem6000.jpg', //商品图片
        price: '15 /袋', //商品价格
      },
      {
        name: '辣条', //商品名称
        introduct:'佳龙散面筋辣条大礼包麻辣儿时小零食网红怀旧食品校园休闲大刀肉 ',//商品介绍
        image: 'https://img.alicdn.com/imgextra/i4/3463541126/O1CN01seJDmA1KBkd9Z8vKW_!!3463541126.jpg', //商品图片
        price: '2 /包', //商品价格
      },
      {
        name: '酱板鸭', //商品名称
        introduct:'安乡杨矮子酱板鸭湖南常德特产正宗酱板鸭香辣/特辣鸭肉零食小吃 ',//商品介绍
        image: 'https://img.alicdn.com/imgextra/i3/4118066308/O1CN011wT6qbFYnnBTKe7_!!4118066308.jpg', //商品图片
        price: '15 /只', //商品价格
      },
      {
        name: '魔芋爽', //商品名称
        introduct:'卫龙辣条香辣味魔芋爽袋整盒装休闲网红零食办公室聚会小吃',//商品介绍
        image: 'https://img.alicdn.com/imgextra/i1/2210643280626/O1CN012tqUgE1GUkaxn6Y7s_!!2210643280626.jpg', //商品图片
        price: '18 /盒', //商品价格
      },
    ], 
  },
  onLoad() {
    let list = [];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i)
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  //获取文字信息
  getCur(e) {
    this.setData({
      hidden: false,
      listCur: this.data.list[e.target.id],
    })
  },
  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },
  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      this.setData({
        listCur: that.data.list[num]
      })
    };
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd() {
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
  },
  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.list;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 20
        })
        return false
      }
    }
  }
})