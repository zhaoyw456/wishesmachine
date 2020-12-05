// pages/idea/addWishes/addWishes.js

const everyDB = wx.cloud.database()
Page({
  data: {
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['长辈-教师节','长辈-元宵节','长辈-母亲节','长辈-父亲节','长辈-端午节','长辈-春节','长辈-中秋节','长辈-重阳节','长辈-元旦','同辈-春节','同辈-元宵节','同辈-端午节','同辈-中秋节','同辈-跨年夜','恋人','早安','午安','晚安','生日'],//下拉列表的数据
    index: 0,//选择的下拉列表下标 
    content:'',
    fileID:'',
    fes_database:'elder_TeachersDay',
    fileID_database:'fileID_elder_TeachersDay'
  },
  addcontent(event){
    this.setData({
      content: event.detail.value
    })
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
  },
  //上传祝福语
  
  adddata(){
      everyDB.collection(this.data.fes_database).add({
        data:{
          content:this.data.content
        },
        success: function(res) {
          wx.showToast({
            title: '添加祝福语成功',
           })
        }
      })
      
  } ,
  //上传图片并把FileID保存到数据库
  chuantupian() {
    let that = this;
    let timestamp = (new Date()).valueOf();
    wx.chooseImage({
     success: chooseResult => {
      wx.showLoading({
       title: '上传中。。。',
      })
      // 将图片上传至云存储空间
      wx.cloud.uploadFile({
       // 指定上传到的云路径
       cloudPath: this.data.fileID_database+'/'+timestamp + '.png',
       // 指定要上传的文件的小程序临时文件路径
       filePath: chooseResult.tempFilePaths[0],
       // 成功回调
       success: res => {
        wx.hideLoading()
        wx.showToast({
         title: '上传图片成功',
        })
        if (res.fileID) {
          everyDB.collection(this.data.fileID_database).add({
            data:{
              fileID:res.fileID
            },
            success: function(res) {
              wx.showToast({
                title: 'fileID已添加',
               })
            }
          })
        }
       },
      })
     },
    })
   },


  //lc
  PickerChange(e) {
    //console.log(e);
    this.setData({
      index: e.detail.value
    })
    this.db()
  },
  db(){
    if(this.data.index == 0){
      this.setData({
        fes_database:'elder_TeachersDay',
        fileID_database:'fileID_elder_TeachersDay'
      })
    }else if(this.data.index == 1){
      this.setData({
        fes_database:'elder_LanternFestival',
        fileID_database:'fileID_elder_LanternFestival'
      })
    }else if(this.data.index == 2){
      this.setData({
        fes_database:'elder_MotherDay',
        fileID_database:'fileID_elder_MotherDay'
      })
    }else if(this.data.index == 3){
      this.setData({
        fes_database:'elder_FatherDay',
        fileID_database:'fileID_elder_FatherDay'
      })
    }else if(this.data.index == 4){
      this.setData({
        fes_database:'elder_DragonBoatFestival',
        fileID_database:'fileID_elder_DragonBoatFestival'
      })
    }else if(this.data.index == 5){
      this.setData({
        fes_database:'elder_SpringFestival',
        fileID_database:'fileID_elder_SpringFestival'
      })
    }else if(this.data.index == 6){
      this.setData({
        fes_database:'elder_MoonFestival',
        fileID_database:'fileID_elder_MoonFestival'
      })
    }else if(this.data.index == 7){
      this.setData({
        fes_database:'elder_DoubleNinthFestival',
        fileID_database:'fileID_elder_DoubleNinthFestival'
      })
    }else if(this.data.index == 8){
      this.setData({
        fes_database:'elder_NewYearDay',
        fileID_database:'fileID_elder_NewYearDay'
      })
    }else if(this.data.index == 9){
      this.setData({
        fes_database:'peer_SpringFestival',
        fileID_database:'fileID_peer_SpringFestival'
      })
    }else if(this.data.index == 10){
      this.setData({
        fes_database:'peer_LanternFestival',
        fileID_database:'fileID_peer_LanternFestival'
      })
    }else if(this.data.index == 11){
      this.setData({
        fes_database:'peer_DragonBoatFestival',
        fileID_database:'fileID_peer_DragonBoatFestival'
      })
    }else if(this.data.index == 12){
      this.setData({
        fes_database:'peer_MoonFestival',
        fileID_database:'fileID_peer_MoonFestival'
      })
    }else if(this.data.index == 13){
      this.setData({
        fes_database:'peer_NewYearDay',
        fileID_database:'fileID_peer_NewYearDay'
      })
    }else if(this.data.index == 14){
      this.setData({
        fes_database:'Lovers',
        fileID_database:'fileID_Lovers'
      })
    }else if(this.data.index == 15){
      this.setData({
        fes_database:'morning',
        fileID_database:'fileID_morning'
      })
    }else if(this.data.index == 16){
      this.setData({
        fes_database:'noon',
        fileID_database:'fileID_noon'
      })
    }else if(this.data.index == 17){
      this.setData({
        fes_database:'night',
        fileID_database:'fileID_night'
      })
    }else if(this.data.index == 18){
      this.setData({
        fes_database:'birthday',
        fileID_database:'fileID_birthday'
      })
    }

  }
})

