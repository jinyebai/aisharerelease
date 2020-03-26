// pages/items/items.js
//账号获取次数加一函数
import acCountDb from '../../utils/acCountDb';
// 密码获取次数加一函数
import paCountDb from '../../utils/paCountDb';
Page({
  data: {
    page_title: "",
    //本地应用信息状态
    infoStatus: false,
    //应用信息数据
    // appInfo: [{}],
    account: '',
    passwd: '',
    pagesPhotos: {
      image1: '',
      image2: '',
      image3: ''
    },
    icon: '',
    appid: ''
  },



  //剪贴板函数
  clipboard(dates) {
    wx.setClipboardData({
      data: dates,
      success(res) {
        wx.getClipboardData({
          success(res) {
            //打印复制好的数据
            console.log(res.data)
          }
        })
      }
    })
  },

  //账号按钮函数
  getAccount() {
    //传给剪贴板
    this.clipboard(this.data.account)
    acCountDb(this.data.appid)
  },

  // 密码按钮函数
  getPasswd() {
    //传给剪贴板
    this.clipboard(this.data.passwd)
    paCountDb(this.data.appid)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    const db = wx.cloud.database();
    //从search页面获取appid
    eventChannel.on('searInfo', (data) => {
      console.log(data)
      this.setData({
        page_title: data.appName,
        appid: data.appid,
        account: data.account,
        passwd: data.passwd,
        icon: data.imageSrc.icon,
        pagesPhotos: {
          image1: data.imageSrc.pagesPhotos.image1,
          image2: data.imageSrc.pagesPhotos.image2,
          image3: data.imageSrc.pagesPhotos.image3
        }
      })
    });

    //test
    wx.getImageInfo({
      src: 'cloud://iosshare-fkjyq.696f-iosshare-fkjyq-1301225085/appsAsset/6003/pagePhotos/image1.png',
      success:res=>{
        console.log('item res is:',res)
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