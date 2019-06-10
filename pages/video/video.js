// pages/video/video.js
const videoTechById = require('../../config').videoTechById
const videoChapterByTechId = require('../../config').videoChapterByTechId
const videoCommentByTechId = require('../../config').videoCommentByTechId
var dateUtil = require('../../utils/util.js');
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['课程介绍', '课程大纲', '评价'],
    currentTab: 0,
    hiddenbut: true,
    videoTech: null,
    chapterList: null,
    commentList:null,
    techId: 0,
    isLoding: true
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    var self = this;
    self.setData({
      techId: options.id
    })


  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  tab_slide: function (e) {//滑动切换tab 
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  minesource:function(){
    if (app.globalData.isLogin){

    }else{
      wx.navigateTo({
        url: '/pages/landingStep/landing/landing',
      })
    }
  },

  initData:function(){
    var self = this;
    var techId  = this.data.techId;
    wx.request({
      url: videoTechById,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { id: techId },
      success: function (result) {
        var arr = result.data.result;
        console.log("videoTechName" + arr.id)
        self.setData({
          videoTech: arr
        })
      }
    })

    wx.request({
      url: videoChapterByTechId,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { techId: techId },
      success: function (result) {
        var arr = result.data.result;
        self.setData({
          chapterList: arr
        })
      }
    })

    wx.request({
      url: videoCommentByTechId,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { techId: techId },
      success: function (result) {
        var arr = result.data.result;
        for(let i = 0;i < arr.length;i++){
          console.log('日期：' + arr[i].createTime);
          arr[i].createTime = dateUtil.formatTime(arr[i].createTime,"Y年M月D日 h:m");
          console.log('日期：' + arr[i].createTime);
        }
        self.setData({
          commentList: arr
        })
      }
    })
    
    self.setData({
      isLoding:false
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
    this.initData();
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
