const Http = require('../../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var {id} = options;
    var res = await Http.getDetail(id);
    this.setData({
      subject:res.data
    })
  },
  handleImage(e){
    var url =e.currentTarget.dataset.url;
    var casts = this.data.subject.casts;
    var urls = casts.map(item=>{
      return item.avatars.small;
    })
    
    wx.previewImage({
      current: url,
      urls
    });
  }
})