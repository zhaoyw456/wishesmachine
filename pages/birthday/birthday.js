// pages/everyday/everyday.js
const everyDB_text = wx.cloud.database().collection("birthday")
const everyDB_picture = wx.cloud.database().collection("fileID_birthday")
Page({
  data:{
    wish:"",  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
    picture:'',
    textDisplay : true,
  },
  onTabItemTap(item) {
    this.updata()
  },
  text(){
    this.setData({
      textDisplay : true
    })
  },
  picture(){
    this.setData({
      textDisplay : false
    })
  },
  updata(){
    everyDB_text.aggregate().sample({size : 3}).end().then(res =>{
      console.log(res);
      this.setData({
        wish : res.list
      })
    })
    everyDB_picture.aggregate().sample({size : 1}).end().then(res =>{
      this.setData({
        picture : res.list
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