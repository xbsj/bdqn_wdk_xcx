// pages/landingStep/landing/landing.js
const loginSessionKeyUrl = require('../../../config').loginSessionKeyUrl
const loginPhone = require('../../../config').loginPhone 
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sessionKey: "",
    openid: "",
  },

  /**
   * 生命周期函数--监听页面加载
   * 通过code 获取 sessionKey 于 openid 
   */
  onLoad: function (options) {
    var self = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: loginSessionKeyUrl,
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            data: {
              code: res.code
            },

            success: function (result) {
              self.setData({
                sessionKey: result.data.result.sessionKey
              })
              self.setData({
                openid: result.data.result.openid
              })
            },

            fail: function ({ errMsg }) {
            }
          })
          console.log(" wx.login成功" + JSON.stringify(res))
        }
      }
    }); 
  },
  /**
   * 用户授权
   * 一键登陆
   */
  getPhoneNumber: function (e) {
    console.log("HUO" + e)
    console.log("HUO" + JSON.stringify(e))

    if (e.detail.errMsg.substr(15) == "fail user deny") {
      wx.showModal({
        title: '提示',
        content: '您已拒绝授权，请重新点击并授权！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) { }

        }
      })
      return
    }

    var self = this;
    if (e.detail.errMsg.substr(15) == "ok") {
      wx.request({
        url: loginPhone,
        method:"POST",
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        data:{
          iv:e.detail.iv,
          encrypted:e.detail.encryptedData,
          sessionKey:self.data.sessionKey,
          openid:self.data.openid
        },
        success:function(result) {
          console.log(result)
          if (result.data.result.status == 200){
            var token = result.data.result.token;
            app.xcxJson.setToken(token);
            app.xcxJson.setUserId(result.data.result.user.id);

            //设置登陆状态
            wx.setStorage({
              key: 'isLogin',
              data: 'true',
              success:function(res){}
            })
            console.log(result.data.result.user)
            wx.setStorageSync("xcxUser", result.data.result.user)
            app.globalData.isLogin = true; 
           
            self.dealRouter(result.data.result.user)

          }
        }


      })
    }

  },
  /**
   * 处理登陆成功后的路由
   */
  dealRouter:function(user){
    if(app.globalData.url == '/pages/mine/mine'){
      if (app.globalData.url == '/pages/mine/mine'){
        wx.reLaunch({
          url: '/pages/mine/mine',
        })
      } else {
        wx.redirectTo({
          url: app.globalData.url
        })
      }
    }else{
      wx.reLaunch({
        url: '/pages/mine/mine',
      })
    }
    app.globalData.url = ""
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