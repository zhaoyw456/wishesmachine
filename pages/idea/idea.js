const everyDB = wx.cloud.database()

Page({
  data: {
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['长辈-教师节','长辈-元宵节','长辈-母亲节','长辈-父亲节','长辈-端午节','长辈-春节','长辈-中秋节','长辈-重阳节','长辈-元旦','同辈-春节','同辈-元宵节','同辈-端午节','同辈-中秋节','同辈-跨年夜','恋人','早安','午安','晚安','生日'],//下拉列表的数据
    index: 0,//选择的下拉列表下标 
    content:''
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
  adddata(){
    if(this.data.index == 0){
      everyDB.collection("elder_TeachersDay").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 1){
      everyDB.collection("elder_LanternFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 2){
      everyDB.collection("elder_MotherDay").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 3){
      everyDB.collection("elder_FatherDay").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 4){
      everyDB.collection("elder_DragonBoatFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 5){
      everyDB.collection("elder_SpringFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 6){
      everyDB.collection("elder_MoonFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 7){
      everyDB.collection("elder_DoubleNinthFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 8){
      everyDB.collection("elder_NewYearDay").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 9){
      everyDB.collection("peer_SpringFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 10){
      everyDB.collection("peer_LanternFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 11){
      everyDB.collection("peer_DragonBoatFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 12){
      everyDB.collection("peer_MoonFestival").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 13){
      everyDB.collection("peer_NewYearDay").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 14){
      everyDB.collection("Lovers").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 15){
      everyDB.collection("morning").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 16){
      everyDB.collection("noon").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 17){
      everyDB.collection("night").add({
        data:{
          content:this.data.content
        }
      })
    }else if(this.data.index == 18){
      everyDB.collection("birthday").add({
        data:{
          content:this.data.content
        }
      })
    }
  } 
})
