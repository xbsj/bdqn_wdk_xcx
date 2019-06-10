// pages/mine/setname/setname.js
const xcxUserUrl = require('../../../config').updataUser
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:""
  },

  closeName: function () {
    //v-mode 密码
    this.setData({
      userName: ""
    })
  },
  setName: function (event) {
    //v-mode 姓名
    this.setData({
      userName: event.detail.value
    })
  },
  cleanSpelChar: function (localData) {
    var boo = false;
    //JS 控制文本框只能输入中文、英文、数字、小数点 、下划线
    var regStr = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.\_]/g;
    var re = new RegExp(regStr);
    if (re.test(localData)) {
      boo = true;
    } else {
      console.log(localData);
    }
    return boo;
  },
  getupuserdata: function () {
    if (this.data.userName.length < 2) {
      wx.showModal({
        title: '提示',
        content: '请输入2-6以内的姓名',
        showCancel: false
      })
      return
    }
    if (this.cleanSpelChar(this.data.userName)) {
      wx.showModal({
        title: '提示',
        content: '名字存在特殊字符',
        showCancel: false
      })
      return
    }
    wx.showToast({
      title: '修改中...',
      icon: 'loading',
      duration: 3000
    })
    // 提交
    var self = this;
    var jsonStr = app.xcxJson.init({ userName: this.data.userName });
    wx.request({
      url: xcxUserUrl,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        json: jsonStr
      },
      method: "POST",
      success: function (result) {
        console.log(result.data)
        wx.hideToast();
        if (result.data.errNo == '0000') {
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 2000
          })
          //修改成功后返回上一页
          setTimeout(function () {
            wx.navigateBack();
          }, 2000)
        }
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var xcxuser = wx.getStorageSync('xcxUser');
    this.setData({
      userName: xcxuser.xcxUserName,
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