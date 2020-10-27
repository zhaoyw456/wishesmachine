Page({
  data: {
   
    multiArray: [['长辈', '同辈','恋人'], ['教师节', '元宵节', '母亲节', '父亲节', '端午节','春节','中秋季','重阳节','元旦']],
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
    
  },
  
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    
    
  }
  
})