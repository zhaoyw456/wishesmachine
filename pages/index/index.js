// Page({
//   home(){
//     wx.switchTab({
//       url: '/pages/festival/festival',
//     })
//   }
// })
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: '不管你在任何时候，不管你在任何地方，反正你都会知道，总会有那么一个人。',
    mottoAuthor: '张爱玲',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    author: "张爱玲",
  },
  navigateTo() {
    wx.switchTab({
      url: '/pages/festival/festival',
    })
  },
  //小程序转发功能
  onShareAppMessage() {
    return {
      title: '年轻人都在用的祝福语小程序',
      imageUrl: '/Icon/share.jpg',
      path: '/pages/index/index'
    }
  }
})

