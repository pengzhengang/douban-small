function http(url,data){
    return new Promise((resolve,reject)=>{
         wx.request({
            url: 'https://music.aityp.com'+url,
            data:data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                resolve(result.data)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}
module.exports = {
    getBanner:()=>{
        return http('/banner',{type:2}) //个性推荐轮播
    },
    getHotSongs:()=>{
        return http('/top/playlist',{order:"hot"}) //热门歌曲
    },
    getJapanSongs:()=>{
        return http('/top/playlist',{cat:"日语"}) //民谣
    },
    getRecommendMV:(data)=>{
        return request('/personalized/mv',data)//推荐MV
    },
    getNewMv:(data)=>{
        return request('/mv/first',data)//最新MV
    },
    getMvDetail:(id)=>{
        return request('/mv/url',{id})
    },
    getRecommendDj:(data)=>{
        return http('/personalized/djprogram',data) //推荐电台接口
    },
    getPlaylistDetail:(data)=>{
        return http('/playlist/detail',data)
    },
    getMusicUrl:(data)=>{
        return http('/song/url',data)
    }
}