
let self;
Page({
  data: {
    // motto: '获取成功返回',
    motto: '获取用户权限',
    // flg : false,
    userInfo: {},
    hasUserInfo: false,
    code: "",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData:false // 如需尝试获取用户信息可改为false  wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') 
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../about/home/home'
    })
  },

  userLogin:function(){
    //2、调用获取用户信息接口
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success:(res)=> {
          console.log({encryptedData: res.encryptedData, iv: res.iv, code: self.data.code})
          //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
          wx.request({
              url: 'http://localhost:8080/wechat/getUserInfo',//自己的服务接口地址
              method: 'post',
              header: {
                  'content-type': 'application/x-www-form-urlencoded'
              },
              data: {encryptedData: res.encryptedData, iv: res.iv, code: self.data.code},
              success:(data)=> {

                  //4.解密成功后 获取自己服务器返回的结果
                  if (data.data.status == 1) {
                      var userInfo_ = data.data.userInfo;
                      console.log(userInfo_);
                  } else {
                      console.log('解密失败')
                  }
              },
              fail: function () {
                  console.log('系统错误')
              }
          })
      },
      fail: function () {
          console.log('获取用户信息失败')
      }
    })
    this.refreshCode();
  },
  onLoad() {
    self = this;
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
        
      })
    }
    this.refreshCode();
  }, 
  refreshCode: function() {
    wx.login({
      success: function (r) {
        self.setData({
          code : r.code//登录凭证
        })
      }
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          iv : res.iv,
          encryptedData : res.encryptedData,
          userInfo: res.userInfo,
          hasUserInfo: true,
          
        })
      }
    })
  },
})