// components/my-index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bannerUrlList: {
      type: Array,
      value:[]
    },
    tabs: {
      type: Array,
      value: []
    },
    isShowBanner: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabSwiperHeight: 300,
    activeTab: 0,
    search: ''
  },
  ready() {
    wx.nextTick(() => {
      this.setTabSwiperHeight()
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tabclick(e) {
      const index = e.detail.index
      this.setData({ 
        activeTab: index 
      })
    },
    change(e) {
      const index = e.detail.index
      this.setData({ 
        activeTab: index 
      })
    },
    setTabSwiperHeight() {
      let queryDom = wx.createSelectorQuery().in(this)
      let searchBarHeight = 0
      let bannerHeight = 0
      queryDom.select('.searchBar').boundingClientRect().exec(rect => {
        searchBarHeight = rect[0].height
        queryDom.select('.banner').boundingClientRect().exec(rect => {
          bannerHeight = rect[0].height
          if(!this.properties.isShowBanner){
            bannerHeight = 0
          }
          queryDom.select('.weui-tabs-bar__wrp').boundingClientRect().exec(rect => {
            let systemInfo = wx.getSystemInfoSync()
            let tabHeight = 0
            for(let i = rect.length - 1; i >= 0; i--){
              if(rect[i] != null){
                tabHeight = rect[i].height
                break
              }
            }
            this.setData({
              tabSwiperHeight: systemInfo.windowHeight - searchBarHeight - bannerHeight - tabHeight
            })
          })
        })
      })
    }
  }
})
