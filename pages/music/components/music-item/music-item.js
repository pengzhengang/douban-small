// pages/index/compoments/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    data:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem(event){
      var id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/music-detail/music-detail?id='+id
      })
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }
})
