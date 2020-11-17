// pages/everyday/everyday.js
const everyDB = wx.cloud.database()
let imgList = []
let firstSwitch = 0//第一次点击选择图片 加载图片
var util = require('../../utils/util.js');
Page({
  data:{
    wish:"",  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
    sj:util.formatTime(),
    goodimg: 'goodmorning',
    picture:'',
    textDisplay : true,
    checked: false,
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
      everyDB.collection("fileID_morning").aggregate().sample({size : 4}).end().then(res =>{
        this.setData({
          picture : res.list
        })
         //push imageList数组
         let i = 0
         for(;i<res.list.length;i++) {
           imgList.push(res.list[i].fileID)
         }
      })
    }else if(util.formatTime() == '午安'){
      everyDB.collection("noon").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_noon").aggregate().sample({size : 4}).end().then(res =>{
        this.setData({
          picture : res.list
        })
         //push imageList数组
         let i = 0
         for(;i<res.list.length;i++) {
           imgList.push(res.list[i].fileID)
         }
      })
    }else{
      everyDB.collection("night").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_night").aggregate().sample({size : 4}).end().then(res =>{
        this.setData({
          picture : res.list
        })
         //push imageList数组
         let i = 0
         for(;i<res.list.length;i++) {
           imgList.push(res.list[i].fileID)
         }
      })
    }
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
  },
   //开关选择器bingchange
   switchCheckStatus(e) {
    this.setData({
      checked: !this.data.checked 
    })
    //只在第一次点击选择图片查询图片
    if(!firstSwitch) {
      this.updata()
      console.log("kaiguan")
      firstSwitch = 1
    }
  },
  //预览图片
  previewImage(event) {
    let currentUrl = event.currentTarget.dataset.src
    console.log("currentUrl",currentUrl);
    //生成urls
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }
})