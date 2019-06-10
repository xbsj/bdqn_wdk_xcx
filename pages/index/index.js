// pages/index/index.js
const indexRoundSowing = require('../../config').indexRoundSowing
const indexProductType = require('../../config').indexProductType
const videoRecommend = require('../../config').videoRecommend

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    arr: null,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    tabBar: null
  },
  binfVideo: function (e) {
    var id = e.currentTarget.dataset['index'];
    wx.navigateTo({
      url: '/pages/video/video?id=' + id,
    })

  },
  /**
   *  启动需要加载的
   */
  init: function() {
    wx.request({
      url: videoRecommend,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {},
      success: function (result) {
        var arr = result.data.result;
        self.setData({
          videoRecommend: arr
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

    var self = this;

    wx.request({
      url: indexRoundSowing,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {},
      success: function(result) {
        var arr = result.data.result;
        self.setData({
          arr: arr
        });
      }
    })

    wx.request({
      url: indexProductType,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {},
      success: function(result) {
        var arr = result.data.result;
        self.setData({
          productType: arr
        });
      }
    })

    wx.request({
      url: videoRecommend,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {},
      success: function (result) {
        var arr = result.data.result;
        self.setData({
          videoRecommend: arr
        });
      }
    })
  },

  productBind: function(e) {
    let id = e.currentTarget.dataset['index'];
    console.info('id=====>' + id);
    wx.navigateTo({
      url: '/pages/sourcespresent/benet/benet?id=' + id,
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