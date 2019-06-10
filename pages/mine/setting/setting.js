// pages/mine/setting/setting.js
const xcxUploadUrl = require('../../../config').uploadimg
const loginOutUrl = require('../../../config').loginOutUrl
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xcxUser:null,
  },

  setName:function(){
    wx.navigateTo({
      url: '/pages/mine/setname/setname',
    })
  },
chooseimage:function(){
  var _this = this;
  wx.chooseImage({
    count:1,
    success: function(res) {
      if (/\.(jpg|jpeg|png|JPG|PNG)$/.test(res.tempFilePaths[0])) {
        var tempFilePaths = res.tempFilePaths

        _this.upheadimg(tempFilePaths[0])
      } else {
        wx.showModal({
          title: "提示",
          showCancel: false,
          content: "请上传静态图片",
          success: function (res) {
            if (res.confirm) {
            }
          }
        })
      }
    },
  })
},
  upheadimg: function (imgurl) {
    var self = this;
    wx.uploadFile({
      url: xcxUploadUrl,
      filePath: imgurl,
      name: 'file',
      formData: {
        'user': 'test'
      },
      success: function (res) {

        //self.updatePhoto(res.data.replace("\"", "").replace("\"", ""));
      }
    })
  },
  /**
   * 退出登陆
   */
  signout:function(){
    wx.showToast({
      title: '退出成功',
      duration:2000
    })
    var jsonStr = app.xcxJson.init();
    wx.request({
      url: loginOutUrl,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        json: jsonStr
      },
      success: function (result) {

      }
    })


    wx.removeStorageSync('token');
    app.getlogingtof();
    setTimeout(function(){
      wx.reLaunch({
        url: '/pages/mine/mine',
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var xcxuser = wx.getStorageSync('xcxUser');
    console.log('xcxUser'+ xcxuser.xcxUserName)
    this.setData({
      xcxUser: xcxuser,
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