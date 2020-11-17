const everyDB = wx.cloud.database()
var util = require('../../utils/util.js');
let imgList = []
let firstSwitch = 0//第一次点击选择图片 加载图片

Page({
  data: {
    wish:"",
    checked: false,
    btnshow : false,//控制显示选择图片是否显示
    multiArray: [['长辈', '同辈','恋人'], ['教师节', '元宵节', '母亲节', '父亲节', '端午节','春节','中秋节','重阳节','元旦']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '长辈'
        },
        {
          id: 1,
          name: '同辈'
        },
        {
          id: 2,
          name: "恋人"
        }
      ], [
        {
          id: 0,
          name: '教师节'
        },
        {
          id: 1,
          name: '元宵节'
        },
        {
          id: 2,
          name: '母亲节'
        },
        {
          id: 3,
          name: '父亲节'
        },
        {
          id: 4,
          name: '端午节'
        },
        {
          id: 5,
          name: '中秋节'
        },
        {
          id:6,
          name: '重阳节'
        }
        ,{
          id: 7,
          name: '元旦'
        }
      ]
    ],
    multiIndex: [0, 0],
    updataDisplay : false,
    dayDisplay : true,
    textDisplay : true,
    picture:'',
    
    day:util.calcDays(new Date()),   //获取下个节日的天数和节日
    // solardate:util.getSolarDate(new Date()),  //阳历日期
    // lunardate:util.getLunarDate(new Date()),  //农历日期
  },
  
  bindMultiPickerChange: function (e) {
    
    this.setData({
      btnshow: true,//显示选择图片
      multiIndex: e.detail.value,
      updataDisplay : true,
    })
    /*
    操作数据库
    */
    this.updata()

  },
  updata(){
    if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 0) ){
      everyDB.collection("elder_TeachersDay").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_TeachersDay").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 1)){
      everyDB.collection("elder_LanternFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_LanternFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 2)){
      everyDB.collection("elder_MotherDay").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_MotherDay").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 3)){
      everyDB.collection("elder_FatherDay").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_FatherDay").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 4)){
      everyDB.collection("elder_DragonBoatFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_DragonBoatFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 5)){
      everyDB.collection("elder_SpringFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_SpringFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 6)){
      everyDB.collection("elder_MoonFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_MoonFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 7)){
      everyDB.collection("elder_DoubleNinthFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_DoubleNinthFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 0) && (this.data.multiIndex[1] == 8)){
      everyDB.collection("elder_NewYearDay").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_elder_NewYearDay").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 1) && (this.data.multiIndex[1] == 0)){
      everyDB.collection("peer_SpringFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_peer_SpringFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 1) && (this.data.multiIndex[1] == 1)){
      everyDB.collection("peer_LanternFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_peer_LanternFestiva").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 1) && (this.data.multiIndex[1] == 2)){
      everyDB.collection("peer_DragonBoatFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_peer_DragonBoatFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 1) && (this.data.multiIndex[1] == 3)){
      everyDB.collection("peer_MoonFestival").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_peer_MoonFestival").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
        this.setData({
          picture : res.list
        })
        //push imageList数组
        let i = 0
        for(;i<res.list.length;i++) {
          imgList.push(res.list[i].fileID)
        }
      })
    }else if((this.data.multiIndex[0] == 1) && (this.data.multiIndex[1] == 4)){
      everyDB.collection("peer_NewYearDay").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_peer_NewYearDay").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
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
      everyDB.collection("Lovers").aggregate().sample({size : 3}).end().then(res =>{
        console.log(res);
        this.setData({
          wish : res.list
        })
      })
      everyDB.collection("fileID_Lovers").aggregate().sample({size : 4}).end().then(res =>{
        console.log(res);
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
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch(e.detail.column) {
      case 0:
        switch(data.multiIndex[0]) {
          case 0: 
            data.multiArray[1] = ['教师节', '元宵节', '母亲节', '父亲节', '端午节','春节','中秋季','重阳节','元旦'];
            data.multiIndex[1] = 0;
            break;
          case 1: 
            data.multiArray[1] = ['春节', '元宵节', '端午节', '中秋节', '跨年夜'];
            data.multiIndex[1] = 0;
            break;
          case 2:
            data.multiArray[1] = ['不管什么节，甜甜的话就对了'];
            data.multiIndex[1] = 0;
        }
      case 1:
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
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
    },
    //开关选择器bingchange
  switchCheckStatus(e) {
    this.setData({
      checked: !this.data.checked 
    })
    //只在第一次点击选择图片查询图片
    if(!firstSwitch) {
      this.updata()
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