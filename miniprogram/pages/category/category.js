// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [
      {
        "_id": "1",
        "count": "157",
        "description": "记录观察生活、思考人生的思想火花。",
        "category_thumbnail_image": "https://www.watch-life.net/images/life-thinking.jpg",
        "link": "https://www.watch-life.net/category/life-thinking",
        "name": "随思偶得",
        "publishInfo": {
          "year": 1951,
          "country": "United States"
        }
      },
      {
        "_id": "1",
        "count": "157",
        "description": "记录观察生活、思考人生的思想火花。",
        "category_thumbnail_image": "https://www.watch-life.net/images/life-thinking.jpg",
        "link": "https://www.watch-life.net/category/life-thinking",
        "name": "随思偶得",
        "publishInfo": {
          "year": 1951,
          "country": "United States"
        }
      }]
  },
  handletap() {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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