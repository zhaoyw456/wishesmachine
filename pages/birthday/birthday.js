// pages/everyday/everyday.js
const everyDB = wx.cloud.database().collection("birthday")

Page({
  data:{
    wish:"",  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
  },
  onTabItemTap(item) {
    everyDB.aggregate().sample({size : 3}).end().then(res =>{
      console.log(res);
      this.setData({
        wish : res.list
      })
    })
  },
  updata(){
    everyDB.aggregate().sample({size : 3}).end().then(res =>{
      console.log(res);
      this.setData({
        wish : res.list
      })
    })
  },
  copyWish(e) {
    console.log(e)
        wx.setClipboardData({
          data: e.currentTarget.dataset.text,
          success: function (res) {
            wx.getClipboardData({
              success: function (res) {
                wx.showToast({
                  title: '复制成功'
                })
              }
            })
          }
        })
  }
})