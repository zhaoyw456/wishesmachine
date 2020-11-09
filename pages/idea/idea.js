Page({

    /**
     * 页面的初始数据
     */
    data: {
        show:false,
        password: '123',
        subvalue: ''
    },
    showMask: function() {
        //显示文本框
        this.setData({
            show: true
        })
    },
    hideMask() {
        //隐藏
        this.setData({
            show: false
        })
    },
    sub: function(e) {
        //console.log(e)
         //重新隐藏
         if(e.detail.value.key==='123') {
             wx.navigateTo({
               url: '/pages/idea/addWishes/addWishes',
             })
         }
        this.setData({
            show: false
        })
    }
   
})