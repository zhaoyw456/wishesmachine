//app.js
//分享
!(function() {
  var PageTmp = Page;

  Page = function(pageConfig) {
    // 设置全局默认分享
    pageConfig = Object.assign(
      {
        onShareAppMessage: function() {
          return {
            title: "年轻人都在用的祝福语小程序",
            path: "/pages/index/index",
            imageUrl: "/Icon/share.jpg"
          };
        },
        onShareTimeline: function () {
          return {
            title: '年轻人都在用的祝福语小程序',
            query: 'from=pyq',
            imageUrl: '/Icon/share.jpg'
          }
        }
      },
      pageConfig
    );

    PageTmp(pageConfig);
  };
})();
App({
  onLaunch: function () {
  //云开发环境初始化
  wx.cloud.init({
    env:"wetry-9gofuwkra87cce7a"
  })
  }
})