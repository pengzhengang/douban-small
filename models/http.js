function http(url){
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
            data: {},
            header: {'content-type':'json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                resolve(result)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}
module.exports = http