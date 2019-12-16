const Http = require('../../utils/http');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var {url,title} = options;
    // switch(title){
    //   case "in_theaters":
    //     console.log(1);
    //     break;
    //   case "coming_soon":
    //     console.log(2);
    //     break;
    //   case "top250":
    //     console.log(3)
    //     break;
    // }
    wx.setNavigationBarTitle({
      title
    });
    wx.showLoading({
      title:"数据加载"
    });
    /*
    {
      "in_theaters":[],
      "coming_soon":[],
      "top250":[]
    } 
     */
    var res = await Http.getMore(url);
    var {subjects}= res.data;
    wx.hideLoading()
    this.setData({
      movies:subjects
    })
  }
})