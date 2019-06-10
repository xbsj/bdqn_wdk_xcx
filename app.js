//app.js
App({
  data: {
    xcxUser: {},
    hasUserInfo: false,
    imgurlprefix: "http:/www.yyuming.vip:8090/images"

  },

  globalData: {
    xcxUser: null,
    isLogin: false,
    userId: null,
   
  },

  onLaunch: function (options) {
    console.log(options)
    var self = this;
    //分销端不显示保存图片授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() { }
          })
        }
      }
    });

  },
  onShow: function (options) {
    console.log('app.js-->' + options.path)
    //获取登录状态
    this.getlogingtof(options);
    if (options.path == 'pages/mine/mine' || options.path == 'pages/index/index') {
      console.log("首页&我的")
      wx.setStorageSync('isBackToIndex', 0)
    } else {
      wx.setStorageSync('isBackToIndex', 1)
    }
  },
  getlogingtof: function (options) {
    //重新获得登录状态
    if (wx.getStorageSync('token')) {
      wx.setStorage({
        key: 'isLogin',
        data: true,
        success: function (res) { }
      })
      this.globalData.isLogin = true;
    } else {
      wx.setStorage({
        key: 'isLogin',
        data: false,
        success: function (res) { }
      })
      this.globalData.isLogin = false;
    }
  },

  /**
   * 页面重新获得登陆状态的方法
   */
  getIsLogin: function (that) {
    console.log('app.isLogin --》' + wx.getStorageSync('isLogin'))
    if (wx.getStorageSync('isLogin')) {
      console.log('true', wx.getStorageSync('isLogin'))
      that.setData({
        isLogin: true
      })
    } else {
      console.log('false', wx.getStorageSync('isLogin'))
      that.setData({
        isLogin: false
      })
    }
    console.log('app.data.isLogin-->>' + that.data.isLogin)
  },
  xcxJson: {
    "header": {
      "user": {
        token: '5C5B1D9F-820D-4D',
      }
    },
    setToken: function (token) {
      wx.setStorage({
        key: 'token',
        data: token,
        success: function (res) { }
      })
    },
    getToken: function (token) {
      return wx.getStorageSync('token')
    },
    setUserId: function (userId) {
      wx.setStorage({
        key: 'userId',
        data: userId,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    getUserId: function (userId) {
      return wx.getStorageSync('userId')
    },
    init: function (obj) {
      if (obj) {
        this.body = obj;
      } else {
        this.body = {};
      }
      this.header.user.token = wx.getStorageSync('token')
      var json = encodeURIComponent(JSON.stringify(this));
      return json;
    }
  }


})