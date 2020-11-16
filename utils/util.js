  //获取早中晚
  //教师节，元宵节，母亲节，父亲节，端午节，春节，中秋节，重阳节，元旦。L代表农历，S代表阳历
  var year = new Date().getFullYear();
  var festivalDate = ['S-'+year+'/9/10','L-'+year+'/1/15','S-'+year+'/5/'+motherDay(),'S-'+year+'/6/'+fatherDay(),'L-'+year+'/5/5','L-'+year+'/1/1','L-'+year+'/8/15','L-'+year+'/9/9','S-'+(year+1)+'/1/1'];
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
  //获取阳历日期格式年-月-日
  function getSolarDate(date) {
    var solarYear = date.getFullYear()
    var solarMonth = date.getMonth() + 1
    var solarDay = date.getDate()
    return [solarYear, solarMonth, solarDay].map(formatNumber).join('/') 
  }
  function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  //获取阴历日期
  let lunar = {
    monthadd: [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    calendar: [0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95],
  };
  // 获取阴历日期
  const getLunarDate = (date1) => {
    var date = getSolarDate(date1)
    let useDate = new Date();
    let year,
      month,
      day;
    if (!date) {
      date = new Date(), year = date.getFullYear(), month = date.getMonth(), day = date.getDate();
    } else {
      date = date.split('/'), year = parseInt(date[0]), month = date[1] - 1, day = parseInt(date[2]);
    }
    if (year < 1921 || year > 2030) {
      return {};
    }
    let total,
      m,
      n,
      k,
      bit,
      lunarYear,
      lunarMonth,
      lunarDay;
    let isEnd = false;
    let tmp = year;
    if (tmp < 1900) {
      tmp += 1900;
    }
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + lunar.monthadd[month] + day - 38;
    if (year % 4 == 0 && month > 1) {
      total++;
    }
    for (m = 0; ; m++) {
      k = (lunar.calendar[m] < 0xfff) ? 11 : 12;
      for (n = k; n >= 0; n--) {
        bit = (lunar.calendar[m] >> n) & 1;
        if (total <= 29 + bit) {
          isEnd = true;
          break;
        }
        total = total - 29 - bit;
      }
      if (isEnd) break;
    }
    lunarYear = 1921 + m;
    lunarMonth = k - n + 1;
    lunarDay = total;
    if (k == 12) {
      if (lunarMonth != 1) {
        lunarMonth--;
      }
    }
    return [lunarYear, lunarMonth, lunarDay].map(formatNumber).join('/') 
    // return {
    //   lunarYear,
    //   lunarMonth,
    //   lunarDay,
    // };
  };
  //计算今年母亲节在5月多少号
  function motherDay() {
    var year = new Date().getFullYear();
    let day,leapyear=0,i,whichday;  
    for(i=1900;i<=year;i++)  
    {  
       if((i%400==0)||((i%100!=0)&&(i%4==0)))leapyear+=1;/*找出1900年到目标年之间有几个闰年*/  
    }  
    day=(((year-1899)*365+leapyear)-(31+30+31+31+30+31+30+31))%7;/*计算从1900年1月1日（星期一）到目标年4月30日共有多少天，并且目标年4月30日为星期几*/  
    if(day==7)whichday=14;  
    else whichday=14-day;  
    return whichday;  
  }
  //计算今年父亲节在6月多少号
  function fatherDay() {
    var year = new Date().getFullYear();
    let day,leapyear=0,i,whichday;  
    for(i=1900;i<=year;i++)  
    {  
       if((i%400==0)||((i%100!=0)&&(i%4==0)))leapyear+=1;/*找出1900年到目标年之间有几个闰年*/  
    }  
    day=(((year-1899)*365+leapyear)-(30+31+31+30+31+30+31))%7;/*计算从1900年1月1日（星期一）到目标年4月30日共有多少天，并且目标年5月31日为星期几*/  
    if(day==7)whichday=21;  
    else whichday=21-day;  
    return whichday;  
  }
  function minFestival(index) {
    if(index == 0){
      return '教师节';
    }else if(index == 1){
      return '元宵节';
    }else if(index == 2){
      return '母亲节';
    }else if(index == 3){
      return '父亲节';
    }else if(index == 4){
      return '端午节';
    }else if(index == 5){
      return '春节';
    }else if(index == 6){
      return '中秋节';
    }else if(index == 7){
      return '重阳节';
    }else if(index == 8){
      return '元旦';
    }
  }

  //计算下一个节日天数
  function calcDays(date) {
    var day = [];
    var count = 0;
    var s_nowDate = new Date(getSolarDate(date)); //阳历
    var l_nowDate = new Date(getLunarDate(date)); //阴历
    //计算每个节日的天数，L阴历，S阳历
    for(var i = 0;i<festivalDate.length;i++){
      var sl_date = festivalDate[i].split("-");
      var fesDate = new Date(sl_date[1]);
      if(sl_date[0] == "S"){
        day[count] = parseInt(fesDate.getTime()-s_nowDate.getTime()) / (1000 * 60 * 60 * 24);
        count++;
      }else{
        day[count] = parseInt(fesDate.getTime()-l_nowDate.getTime()) / (1000 * 60 * 60 * 24);
        count++;
      }
    }
    var minday;
    var index; 
    for(var j = 0; j<day.length;j++){
      if(day[j]>=0){
        minday = day[j];
        index = j;
        break;
      }
    }
    for(var k = index+1; k<day.length;k++){
      if(day[k]>=0){
        if(minday>day[k]){
          minday = day[k];
          index = k;
        }
      }
    }
    var fes = minFestival(index)
    return {fes,minday};  //返回距离最近的节日和天数 
  }
  module .exports = {
    formatTime: formatTime,
    getSolarDate: getSolarDate,
    getLunarDate: getLunarDate,
    calcDays:calcDays,
  }
