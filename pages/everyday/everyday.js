// pages/everyday/everyday.js
const everyDB = wx.cloud.database()
var util = require('../../utils/util.js');
Page({
  data:{
    wish:"",  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
    sj:util.formatTime(),
  },
  onTabItemTap(item) {
    if(util.formatTime() == '早安'){
      everyDB.collection("morning").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
    }else if(util.formatTime() == '午安'){
      everyDB.collection("noon").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
    }else{
      everyDB.collection("night").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
    }
    
  },
  updata(){
    if(util.formatTime() == '早安'){
      everyDB.collection("morning").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
    }else if(util.formatTime() == '午安'){
      everyDB.collection("noon").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
    }else{
      everyDB.collection("night").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
    }
  },
})