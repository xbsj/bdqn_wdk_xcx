// pages/videoindex/videoindex.js
const videoType = require('../../config').videoType
const videoTechAll = require('../../config').videoTechAll
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 9
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  binfVideo:function(e){
    var id = e.currentTarget.dataset['index'];
    wx.navigateTo({
      url: '/pages/video/video?id=' + id,
    })
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.request({
      url: videoTechAll,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {},
      success: function (result) {
        var arr = result.data.result;
        self.setData({
          videoall: arr
        });
      }
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