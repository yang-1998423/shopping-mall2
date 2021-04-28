const app = getApp();
let loginFlg = false;
let callbackArr = [];
function request(url, data, callBack, method = 'post', isShowLoading = false) {
  if (loginFlg) {
    let cb = function() {
      request0(url, data, callBack, method, isShowLoading);
    };
    callbackArr.push(cb);
    return;
  }
  if (app.globalData.token) {
    request0(url, data, callBack, method, isShowLoading)
  } else {
    login()
    .then(function() {
      request0(url, data, callBack, method, isShowLoading)
      for (let index = callbackArr.length - 1; index >= 0; index--) {
        const func = callbackArr.splice(index, 1)[0];
        func();
      }
    });
  }
}

function request0(url, data, callBack, method, isShowLoading) {
  if (isShowLoading) {
    wx.showToast({
      title: '请稍候',
      icon: 'loading'
    })
  }
  wx.request({
    url: app.globalData.baseUrl + url,
    data: data,
    header: {
      Authorization: "Bearer " + app.globalData.token
    },
    method: method,
    success: function(res) {
      callBack(res.data)
    },
    complete: function() {
      wx.hideToast();
    }
  })
}

function login() {
  loginFlg = true;
  wx.showToast({
    title: '正在登录',
    icon: 'loading'
  })
  return new Promise(function(resolve, reject) {
    wx.login({
      success (res) {
        if (res.code) {
          wx.request({
            url: app.globalData.baseUrl + 'wechat/login',
            method: "POST",
            data: {
              code: res.code
            },
            success: function(res1) {
              if(res1.data.code == 200) {
                app.globalData.token = res1.data.data;
                resolve();
              } else {
                wx.showToast({
                  title: res1.data.msg
                })
                reject();
              }
            },
            complete: function() {
              wx.hideToast();
              loginFlg = false;
            }
          })
        } else {
          wx.showToast({
            title: '登录失败!'
          })
          reject();
          loginFlg = false;
        }
      }
    })
  });
}


module.exports = {
  request: request
}
