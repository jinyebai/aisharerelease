// components/my-cpn/m-swiperr.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperUrl: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //传入组件一个数组，包含swiper image的url
    imgUrl(data) {
      // console.log('swiper rec:', data)
      this.setData({
        swiperUrl: data
      })
    }
  }
})
