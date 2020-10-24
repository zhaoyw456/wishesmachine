// pages/everyday/everyday.js
const everyDB = wx.cloud.database().collection("moring")

Page({
  data:{
    wish:"",  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
  },
  onTabItemTap(item) {
    everyDB.aggregate().sample({size : 1}).end().then(res =>{
      console.log(res);
      this.setData({
        wish : res.list
      })
    })
  },
  updata(){
    everyDB.aggregate().sample({size : 1}).end().then(res =>{
      console.log(res);
      this.setData({
        wish : res.list
      })
    })
  }
})