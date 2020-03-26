// components/m-recommend/m-recommend.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: {
      type: String,
      value: 'cloud://iosshare-fkjyq.696f-iosshare-fkjyq-1301225085/appsAsset/6001/icon/icon.png'
    },
    title: {
      type: String,
      value: '应用标题'
    },
    webUrl: {
      type: String,
      value: 'http://mp.weixin.qq.com/s?__biz=MzU3Njc2ODk0NQ==&mid=2247484067&idx=1&sn=92a5f21a04cf793df5db0b8b26c88b62&chksm=fd0f9c7dca78156b8ccef1fdd4cfe79194cb29c314073421331255621d1b1fd5b3f288cbcd58&token=953151322&lang=zh_CN#rd'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // img: 'cloud://iosshare-fkjyq.696f-iosshare-fkjyq-1301225085/appsAsset/6001/icon/icon.png',
    // title: 'xiaohuojian',
    // webUrls: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 进行web-view跳转前设定globaldata
    webView() {
      getApp().globalData.recommendTowebView = this.data.webUrl
      console.log('globalData url is:', getApp().globalData.recommendTowebView)
      wx.navigateTo({
        url: '../../pages/webView/webView?urlStatue=ok',
      })
    }
  },

  lifetimes: {
    attached: function (options) {
      // this.setData({
      //   webUrl:this.properties.webUrl
      // })
      // console.log('data is:',this.properties.webUrl)

    }
  }
})
