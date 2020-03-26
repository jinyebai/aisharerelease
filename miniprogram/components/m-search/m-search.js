var app = getApp();
Page({
    data: {
        inputShowed: false,
        inputVal: ""
    }

}),
    Component({
        properties: {
            //接收传入组件的数据
            title: {
                type: String,
                value: 'Title'
            },
            desc: {
                type: String,
                value: 'desc'
            }
        },
        methods: {
            showInput: function () {
                this.setData({
                    inputShowed: true
                });
            },
            hideInput: function () {
                this.setData({
                    inputVal: "",
                    inputShowed: false
                });
            },
            clearInput: function () {
                this.setData({
                    inputVal: ""
                });
            },
            inputTyping: function (e) {
                this.setData({
                    inputVal: e.detail.value
                });
            },
            //搜索函数
            search: function () {
                const db = wx.cloud.database()
                //查询数据库中是否有该ID数据
                db.collection('apps').doc(this.data.inputVal).get({
                    success: res => {
                        var appInfo = res
                        console.log('appInfo :',appInfo)
                        wx.navigateTo({
                            url: '/pages/items/items?appid=this.data.inputVal',
                            success: (res) => {
                                // 通过eventChannel向被打开页面传送数据
                                res.eventChannel.emit('searInfo', {
                                    appName: appInfo.data.name,
                                    account:appInfo.data.account,
                                    passwd:appInfo.data.passwd,
                                    appid: this.data.inputVal,
                                    imageSrc: {
                                        icon: app.globalData.appImageUrl + this.data.inputVal + '/icon/icon.png',
                                        pagesPhotos: {
                                            image1: app.globalData.appImageUrl + this.data.inputVal + '/pagePhotos/image1.png',
                                            image2: app.globalData.appImageUrl + this.data.inputVal + '/pagePhotos/image2.png',
                                            image3: app.globalData.appImageUrl + this.data.inputVal + '/pagePhotos/image3.png'
                                        }
                                    }
                                })
                            }
                        })
                    },
                    fail: err => {
                        wx.navigateTo({
                            url: '/pages/searchErr/searchErr',
                        })
                    }
                })
            }
        }
    })
