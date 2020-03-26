// miniprogram/pages/webView/webView.js
//web-view页面，app.js内globalData.recommendTowebView为url
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webUrl:''
    // webUrl: 'http://mp.weixin.qq.com/s?__biz=MzU3Njc2ODk0NQ==&mid=2247484067&idx=1&sn=92a5f21a04cf793df5db0b8b26c88b62&chksm=fd0f9c7dca78156b8ccef1fdd4cfe79194cb29c314073421331255621d1b1fd5b3f288cbcd58&token=953151322&lang=zh_CN#rd'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('options is:',options)
    this.setData({
     webUrl:app.globalData.recommendTowebView
    })
    console.log('web-view',this.data.webUrl)
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