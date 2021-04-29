// pages/category/commentpage/commentpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      commentList:[
        {
            id:1,
            userName:"张三",
            size:"L",
            color:"灰色",
            text:"这个商品使用非常好",
            imghead:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
            // imggoods:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'

            imggoods:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg']
      },
      {
        id:2,
        userName:"李四",
        size:"XL",
        color:"灰色",
        text:"这个商品使用非常好",
        imghead:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg',
        imggoods:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg']
  },
  {
    id:3,
    userName:"王五",
    size:"XXL",
    color:"黑色",
    text:"这个商品使用非常好",
    imghead:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
    imggoods:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg']
},
    ]
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

  },	
  previewImage: function (e) {  
		var current=e.target.dataset.src;
		wx.previewImage({
		  	current: current, // 当前显示图片的http链接
		  	urls: this.data.commentList[0].imggoods // 需要预览的图片http链接列表
		})
	} 
})