var app=getApp
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,

    iconList: [{
      icon: 'pay',
      color: 'green',
      badge: 120,
      name: '待付款',
      url: "/pages/about/order/order?type=0"
    }, {
      icon: 'send',
      color: 'green',
      badge: 1,
      name: '待发货',
      url: "/pages/about/order/order?type=1"
    }, {
      icon: 'deliver',
      color: 'green',
      badge: 0,
      name: '待收货',
      url: "/pages/about/order/order?type=2"
    }, {
      icon: 'comment',
      color: 'green',
      badge: 22,
      name: '待评价',
      url: "/pages/about/order/order?type=3"
    }, {
      icon: 'refund',
      color: 'green',
      badge: 0,
      name: '退款',
      url: "/pages/about/refund/refund"
    }, {
      icon: 'service',
      color: 'green',
      badge: 0,
      name: '售后',
      url: "/pages/about/aftermarket/aftermarket"
    }],
    gridCol:3,
    skin: false
  },
  methods: {
    
    jumpPages(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.target,
      })
    },
  },
})
