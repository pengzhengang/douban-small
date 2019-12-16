const myaudio = wx.getBackgroundAudioManager()
const HTTP = require('../../models/music-http');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    poster:"",
    isPlay:true,
    animation: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var id = options.id;
    var name = options.name;
    var res = await HTTP.getMusicUrl({id:id})
    var url = res.data[0].url;
    myaudio.title = name;
    myaudio.src = url;
    var poster = wx.getStorageSync('poster')
    myaudio.coverImgUrl = poster;
    wx.setStorageSync('playState', true)
    wx.setStorageSync('playId',id)
    this.setData({
      name,
      poster
    })

   myaudio.onPlay(()=>{
      this.setData({
        isPlay:true
      })
      wx.setStorageSync('playState', true)
   })
   myaudio.onPause(()=>{
     this.setData({
       isPlay:false
     })
     wx.setStorageSync('playState', false)
   })
  },
  handleClick(){
     if(this.data.isPlay){
       this.setData({
         isPlay:false
       })
       myaudio.pause()
       wx.setStorageSync('playState', false)
     }else{
       this.setData({
         isPlay:true
       })
       myaudio.play()
       wx.setStorageSync('playState', true)
     }
  }
})