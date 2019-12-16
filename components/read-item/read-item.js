// components/read-item/read-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  methods: {
     handleToggle(){
       wx.navigateTo({
         url: '/pages/read-detail/read-detail?id='+this.properties.data.postId
       })
     }
  }
})
