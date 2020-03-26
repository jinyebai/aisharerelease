// pages/home/home.js
import acCountDb from '../../utils/acCountDb';
import paCountDb from '../../utils/paCountDb';
var app = getApp;
var url = getApp().globalData.swiperImage

Page({

  data: {
    urlList: [],
    recommend: {},
    callTimes: [],
    // 推荐数据标题
    title: [],
    // 推荐数据web链接
    webUrl: [],
    //推荐数据图片
    img: []
  },

  //传入swiper图片url函数
  swiperImageUrl: function () {
    var data = {
      url: [url + 'image1.png', url + 'image2.png', url + 'image3.png', url + 'image4.png', url + 'image5.png', url + 'image6.png', url + 'image7.png']
    }
    // console.log('data.url:', data.url)
    for (let index = 0; index < 7; index++) {
      // console.log('index:', index)
      wx.cloud.getTempFileURL({
        fileList: [data.url[index]],
        success: res => {
          // fileList 是一个有如下结构的对象数组
          // [{
          //    fileID: 'cloud://xxx.png', // 文件 ID
          //    tempFileURL: '', // 临时文件网络链接
          //    maxAge: 120 * 60 * 1000, // 有效期
          // }]
          // console.log('res is:',res)
          if (res.fileList[0].tempFileURL) {
            var newArray = [res.fileList[0].tempFileURL]
            var urlLists = this.data.urlList.concat(newArray)
            // console.log('urlLists is:',urlLists)
            this.setData({
              urlList: urlLists
            })
            this.selectComponent('#swip').imgUrl(this.data.urlList)
            // console.log('url is', res.fileList)
            // console.log('data.urlList is:', this.data.urlList)
          }
        },
        fail: console.error
      })
    }
  },

  //获取推荐数据函数
  getRecommend() {
    const db = wx.cloud.database();
    db.collection('appCallTimes').get({
      success: res => {
        var callTimesTemp = [];
        // 将数据库合集appCallTimes中数据取出，赋值给callTimesTemp
        for (let item = 0; item < res.data.length; item++) {
          callTimesTemp = callTimesTemp.concat(res.data[item])
        }
        console.log('--------------', res.data.length)
        // 冒泡排序callTimesTemp
        for (let i = 0; i < res.data.length - 1; i++) {
          for (let j = 0; j < res.data.length - 1; j++) {
            // console.log('for')
            if (callTimesTemp[j].paCounters < callTimesTemp[j + 1].paCounters) {
              var temp = callTimesTemp[j]
              callTimesTemp[j] = callTimesTemp[j + 1]
              callTimesTemp[j + 1] = temp
            }
          }
        }
        this.setData({
          callTimes: callTimesTemp
        })
        // console.log('counter is:', res.data)
        // console.log('callTimesTemp is:', callTimesTemp)
        console.log('callTimes is:', this.data.callTimes)
        console.log('------c--------', this.data.callTimes.length)

        var length = this.data.callTimes.length
        var id, img, title, webUrl
        console.log('length is:', length)

        // 调用数据库，获取应用标题和web-view链接
        db.collection('apps').get({
          success: ress => {
            console.log('transfer res is:', ress)
            for (let index = 0; index < length; index++) {
              id = this.data.callTimes[index]._id
              console.log('id is:', id)
              // 遍历数组，查找相应的值
              var found=ress.data.findIndex(function(value, index, arr) {
                return value._id ==id;
                })
              console.log('found:',found)
              var img=[]
              // img[0]='aaaaa'
              // console.log('img:',img)
              var tempImg = 'img[' + index + ']'
              console.log(tempImg)
              // this.setData({
              //   img : img.concat(res.data[item])
              // })
              this.setData({
                [tempImg]: 'cloud://iosshare-fkjyq.696f-iosshare-fkjyq-1301225085/appsAsset/' + id + '/icon/icon.png'
              })
              console.log('img is:', img[index])

              var tempTitle = 'title[' + index + ']'
              this.setData({
                [tempTitle]: ress.data[id].name
              })

              var tempWeb = 'webUrl[' + index + ']'
              this.setData({
                [tempWeb]: ress.data[id].url
              })
              console.log('title is:', this.data.title[index])
              console.log('webUrl is:', this.data.webUrl[index])
            }
          }
        })
      }
    })
  },

  // 处理推荐数据并传入m-recommend组件
  transfer() {
    const db = wx.cloud.database()
    var length = this.data.callTimes.length
    var id, img, title, webUrl
    console.log('length is:', length)
    for (let index = 0; index < length; index++) {
      id = this.data.callTimes[index]._id
      img = 'cloud://iosshare-fkjyq.696f-iosshare-fkjyq-1301225085/appsAsset/' + id + '/icon/icon.png'
      // 调用数据库，获取应用标题和web-view链接
      db.collection('apps').get({
        success: res => {
          console.log('transfer res is:', res)
        }
      })
    }
  },

  onLoad: function (options) {
    //传入swiper图片url
    this.swiperImageUrl()
    this.getRecommend()
    // this.transfer()
  },
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