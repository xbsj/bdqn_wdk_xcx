// pages/mine/mine.js
const getUserInfo = require('../../config').getUserInfo
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:true,
    xcxUser:null,
    phone:'13521288747',
  },
  webindtap:function(){
    wx.navigateTo({
      url: '/pages/service/we/we',
    })
  },
  publicNumber:function(){
    wx.navigateTo({
      url: '/pages/service/public/public',
    })
  },
  contact:function(){
    wx.navigateTo({
      url: '/pages/service/contact/contact',
    })
  },
 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },
  /**
   * 跳转到微信一键登陆
   */
  gotoLogPath:function(){
    wx.navigateTo({
      url: '/pages/landingStep/landing/landing',
    })
  },
  jumpindex: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  //跳转到设置
  setting:function(){
    wx.navigateTo({
      url: '/pages/mine/setting/setting',
    })
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
    app.getIsLogin(this);
    if (this.data.isLogin){
      this.initData();
    }
  },
  /**
   * 获取用户信息
   */
  initData:function(){
    var self = this;
    var jsonStr = app.xcxJson.init();
    //Console.log('mine.init--->' + jsonStr)
    wx.request({
      url: getUserInfo,
      method:"POST",
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:{
        json:jsonStr
      },
      success:function(result){
        console.log(result)
        if(result.data.errNo = '0000'){
          var xcxUser = result.data.result.xcxUser;
          console.log('xcxUser.userName' + xcxUser.xcxUserName)
          if (xcxUser.xcxUserName) {
            wx.setStorage({
              key: 'userName',
              data: xcxUser.xcxUserName,
            })
          }

          self.setData({
            xcxUser: xcxUser,
          })
          console.log('xcxUser:' + self.data.xcxUser.xcxUserName)
        }
      
      },
      fail: function({
        errMsg
      }){
        console.log('request faii',errMsg)
      }

    })
    
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