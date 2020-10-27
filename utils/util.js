  function formatTime() {
    var  that = this;
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    // console.log("当前时间戳为：" + timestamp);
  
    //获取当前时间
    var n = timestamp * 1000;
  
    var date = new Date(n);
    //获取时
    var h = date.getHours();
  
    if (4 < h && h <= 10) {
      return '早安'
    } else if (10 < h && h <= 15) {
      return '午安'
    } else {
      return '晚安'
    } 
  }
  module .exports = {
    formatTime: formatTime
  }
