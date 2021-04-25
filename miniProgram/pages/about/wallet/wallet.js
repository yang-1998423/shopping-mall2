// pages/about/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balance:"999999999",
    date: '2021-04-23',//默认起始时间  
    date2: '2021-05-24',//默认结束时间 


    array: ['全部', '支出', '收入'],
    objectArray: [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '支出'
      },
      {
        id: 2,
        name: '收入'
      },
     
    ],
    index: 0,
    items: [
    {
      text: '转入',
      money: '+100',
      cl: 'color1',
      time: '11:00',
      time2: '2021/09/01',
      src: '余额充值'
    },{
      text: '支出',
      money: '-200',
      cl:'color2',
      time:'10:00',
      time2: '2021/08/13',
      src: '干饭消费'
    },{
      text: '转入',
      money: '+300',
      cl:'color1',
      time:'9:00',
      time2: '2021/06/07',
      src: '余额充值'
    },{
      text: '支出',
      money: '-400',
      cl:'color2',
      time:'8:00',
      time2: '2021/05/29',
      src: '逛街消费'
    },
    {
      text: '转入',
      money: '+8000',
      cl:'color1',
      time:'7:00',
      time2: '2021/05/21',
      src: '余额充值'
    }
    ]
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
        
  },

  // 时间段选择  
  bindDateChange(e) {
    let that = this;
    console.log(e.detail.value)
    that.setData({
      date: e.detail.value,
    })
  },
  bindDateChange2(e) {
    let that = this;
    that.setData({
      date2: e.detail.value,
    })

},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})