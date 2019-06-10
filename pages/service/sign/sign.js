// pages/service/sign/sign.js
var app = getApp()
const userSignUrl = require('../../../config').userSignUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '13521288747'
  },
  openmap:function(){
    var that = this;
    //获取当前位置
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
    // wx.chooseLocation({
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     var speed = res.longitude
    //     var accuracy = res.accuracy
    //     that.setData({ latitude: latitude })
    //     that.setData({ longitude: longitude })
    //   }
    // })
    // wx.openLocation({
    //   latitude: 2.6,
    //   longitude: 5.0,
    //   scale: 18,
    //   name: '北大青鸟五道口',
    //   address: '北京市海定区学院路街道五道口暂安处2号院北大青鸟青鸟楼',
    //   complete: function () {
    //     console.log('complete', arguments);
    //   }
    // });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
  * 拨打电话
  */
  callme: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
      falg: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})