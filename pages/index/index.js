//Page Object
Page({
    data: {
        
    },
    handleToggle(){
        /* 使用wx.switch-->跳转到tabbar页面 */
        wx.switchTab({
            url: '/pages/read/read'
        })
    }
});
  