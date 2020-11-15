// pages/everyday/everyday.js
const everyDB_text = wx.cloud.database().collection("birthday")
const everyDB_picture = wx.cloud.database().collection("fileID_birthday")
let imgList = []
let firstSwitch = 0//第一次点击选择图片 加载图片
Page({
  data:{
    wish:"",  //这是一个空的数组，等下获取到云数据库的数据将存放在其中
    picture:'',
    textDisplay : true,
    //nav
    TabCur: 0,
    scrollLeft:0,
    checked: false,
    //imgList: []
  },
  onTabItemTap(item) {
    this.updata()
  },
  // text(){
  //   this.setData({
  //     textDisplay : true
  //   })
  // },
  // picture(){
  //   this.setData({
  //     textDisplay : false
  //   })
  // },
  updata(){
    if(!this.data.checked) {
      everyDB_text.aggregate().sample({size : 3}).end().then(res =>{
  
        this.setData({
          wish : res.list
        })
      })
    } else {
      everyDB_picture.aggregate().sample({size : 9}).end().then(res =>{
        console.log("pic",res)
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
  //导航条
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
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
    //生成urls


    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }
})