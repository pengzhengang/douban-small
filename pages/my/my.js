// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:true,
    imageUrl: "/images/avatar/logo.png",
    longitude: 114.504216,
    latitude: 30.552472,
    scale: 17,
    showCompass: true,
    markers: [{
      iconPath: "/images/icon/location.png",
      id: 0,
      latitude: 30.552472,
      longitude: 114.504216,
      width: 30,
      height: 30,
      label:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      },
      callout:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      }
    }],
    polyline: [{
      points: [{
        longitude: 114.504216,
        latitude: 30.552472
      }, {
        longitude: 114.433850,
        latitude: 30.461540,
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    circles:
      [
        {
          longitude: 114.504216,
          latitude: 30.552472,
          radius: 50,
          fillColor: "#C20C0C66"
        }
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleImage() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const src = res.tempFilePaths[0]

        this.setData({
          imageUrl: src
        })
      }
    });
  }
})