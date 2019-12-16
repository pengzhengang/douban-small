const HTTP = require('../../models/music-http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist: "",
    coverImgUrl: "",
    isPlay:false,
    playId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    var playState = wx.getStorageSync('playState');
    var playId = wx.getStorageSync('playId')
    if(playState!=null){
      this.setData({
        isPlay:playState
      })
    }
    this.setData({
      playId
    })
  },
  onLoad: async function (options) {
    var id = options.id;
    var data = await HTTP.getPlaylistDetail({
      id
    })
    var songs = []
    data.playlist.tracks.forEach(item => {
      var obj = {};
      obj.id = item.id;
      obj.name = item.name;
      obj.coverImage = item.al.picUrl
      songs.push(obj)
    })
    this.setData({
      playlist: songs,
      coverImgUrl: data.playlist.coverImgUrl
    })

  },
  togglePlay(event) {
    var {
      id,
      name,
      poster
    } = event.currentTarget.dataset;
    wx.setStorageSync("poster", poster)
    wx.navigateTo({
      url: `/pages/music-play/music-play?id=${id}&name=${name}`
    })
  }
})