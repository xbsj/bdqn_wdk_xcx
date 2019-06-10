// pages/sourcespresent/benet/benet.js
const productInfo = require("../../../config").productInfo
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(" benet =====id >>>" + options.id);
    var self = this;
    wx.request({
      url: productInfo,
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { typeId: options.id},
      success:function(result){
        var product = result.data.result;
        console.log("product===>>" + product)
        self.setData({ product: product})
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