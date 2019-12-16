const HTTP = require('../../models/music-http');

Page({
  data: {
    hotSongs:"",
    newSongs:"",
    djSongs:""
  },
  onLoad: async function () {
    var hotSongs = await HTTP.getHotSongs();
    var newSongs = await HTTP.getJapanSongs();
    var djSongs = await HTTP.getRecommendDj();
    var songs=[]
    djSongs.result.forEach(item=>{
      var obj = {}
      obj.id = item.id;
      obj.name = item.name;
      obj.coverImgUrl = item.picUrl;
      obj.playCount = item.program.adjustedPlayCount;
      songs.push(obj)
    })
    this.setData({
      hotSongs:hotSongs.playlists.slice(0,3),
      newSongs:newSongs.playlists.slice(0,3),
      djSongs:songs.slice(0,3)
    })
  }
})