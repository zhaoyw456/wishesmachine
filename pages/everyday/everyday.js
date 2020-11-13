// pages/everyday/everyday.js
const everyDB = wx.cloud.database()
var util = require('../../utils/util.js');
Page({
  data:{
    wish:"",  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
    sj:util.formatTime(),
    goodimg: 'goodmorning',
    picture:'',
    textDisplay : true,
  },
  transferImg() {

  },
  /*
  
  */
  onTabItemTap(item) {
    this.updata()
  },
  updata(){
    if(util.formatTime() == '早安'){
      everyDB.collection("morning").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_morning").aggregate().sample({size : 1}).end().then(res =>{
        this.setData({
          picture : res.list
        })
      })
    }else if(util.formatTime() == '午安'){
      everyDB.collection("noon").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_noon").aggregate().sample({size : 1}).end().then(res =>{
        this.setData({
          picture : res.list
        })
      })
    }else{
      everyDB.collection("night").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_night").aggregate().sample({size : 1}).end().then(res =>{
        this.setData({
          picture : res.list
        })
      })
    }
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
  //复制文本
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