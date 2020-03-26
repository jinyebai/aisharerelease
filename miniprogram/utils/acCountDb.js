export default function acCountDb(data) {
  //acCountDb函数，传入appid，进行账户读取计数操作
  console.log('funRec', data)
  const db = wx.cloud.database()
  const _ = db.command
  db.collection('appCallTimes').doc(data).update({
    data: {
      acCounters: _.inc(1)
    },
    success: res => {
      console.log('funtion res:', res)
      if (res.stats.updated == '0') {
        console.log('run in if,data:',data)
        db.collection('appCallTimes').add({
          data: { _id: data, 
          acCounters:1
          },
          success:rec=>{
            console.log('complete')
          }
        })
        // console.log('-------')
        // db.collection('appCallTimes').doc(data).update({
        //   data: {
        //     acCounters: _.inc(1)
        //   },
        //   success: rec => {
        //     console.log('add a item:', data)
        //   }
        // })
      }
    }
    // fail: err => {
    //   console.log(err)
    //   db.clooection('appCallTimes').add({
    //     _id: data
    //   })
    //   db.collection('appCallTimes').doc(data).update({
    //     data: {
    //       counters: _.inc(1)
    //     },
    //     success: rec => {
    //       console.log('add a item:', data)
    //     }
    //   })
    // }
  })
}