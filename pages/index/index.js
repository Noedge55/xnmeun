// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabs: [],
    tabSwiperHeight: 300,
    activeTab: 0,
    search: '',
    dataList: ['http://www.xnmeun.com/file/path//upload/images/20200414/beece5bc39a94cd0b37ddbc76477ae9a.jpg', 'http://www.xnmeun.com/file/path//upload/images/20200414/25dbf90b35834684a37b019b31dbef51.jpg', 'http://www.xnmeun.com/file/path//upload/images/20200414/5d34632a596c48b9a34d9a4e79e84bf8.jpg'],
    isShowImg: true,
    infoList: [
      {
        title: "湖北省信息院领导莅临研究院调研交流",
        desc: "为深入贯彻习近平总书记关于统筹疫情防控和经济社会发展的重要指示、视察湖北重要讲话精神，扎实推动科技经济深度融合、服务高质量发展，中国科协党组书记、常务副主席、书记处第一书记怀进鹏带队到湖北开展调研。",
        type: "新闻资讯",
        createTime: "2020-08-28",
        imgUrl: "http://www.xnmeun.com/file/path//upload/images/20200415/1c09615d866949379bca5a5610e1ef58.png"
      },
      {
        title: "湖北省信息院领导莅临研究院调研交流",
        desc: "为深入贯彻习近平总书记关于统筹疫情防控和经济社会发展的重要指示、视察湖北重要讲话精神，扎实推动科技经济深度融合、服务高质量发展，中国科协党组书记、常务副主席、书记处第一书记怀进鹏带队到湖北开展调研。",
        type: "新闻资讯",
        createTime: "2020-08-28",
        imgUrl: "http://www.xnmeun.com/file/path//upload/images/20200415/1c09615d866949379bca5a5610e1ef58.png"
      }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    const titles = ['热门需求', '新闻资讯', '联盟动态', '政策信息']
    const tabs = titles.map(item => ({
      title: item
    }))
    this.setData({
      tabs
    })
    wx.nextTick(() => {
      this.setTabSwiperHeight()
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  setTabSwiperHeight() {
    let queryDom = wx.createSelectorQuery()
    let searchBarHeight = 0
    let bannerHeight = 0
    queryDom.select('.searchBar').boundingClientRect().exec(rect => {
      searchBarHeight = rect[0].height
      queryDom.select('.banner').boundingClientRect().exec(rect => {
        bannerHeight = rect[0].height
        queryDom.select('.weui-tabs-bar__wrp').boundingClientRect().exec(rect => {
          let systemInfo = wx.getSystemInfoSync()
          this.setData({
            tabSwiperHeight: systemInfo.windowHeight - searchBarHeight - bannerHeight - rect[1].height
          })
        })
      })
    })
  }
})