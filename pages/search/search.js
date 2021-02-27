// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    multiIndex: [0, 0, 0],
    search: '',
    tabs: [{
      title: '推荐企业',
      isShowImg: true,
      contentList: [{
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
      }]
    },{
      title: '优质企业',
      isShowImg: true,
      contentList: [{
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
      },{
        title: "湖北省信息院领导莅临研究院调研交流",
        desc: "为深入贯彻习近平总书记关于统筹疫情防控和经济社会发展的重要指示、视察湖北重要讲话精神，扎实推动科技经济深度融合、服务高质量发展，中国科协党组书记、常务副主席、书记处第一书记怀进鹏带队到湖北开展调研。",
        type: "新闻资讯",
        createTime: "2020-08-28",
        imgUrl: "http://www.xnmeun.com/file/path//upload/images/20200415/1c09615d866949379bca5a5610e1ef58.png"
      },{
        title: "湖北省信息院领导莅临研究院调研交流",
        desc: "为深入贯彻习近平总书记关于统筹疫情防控和经济社会发展的重要指示、视察湖北重要讲话精神，扎实推动科技经济深度融合、服务高质量发展，中国科协党组书记、常务副主席、书记处第一书记怀进鹏带队到湖北开展调研。",
        type: "新闻资讯",
        createTime: "2020-08-28",
        imgUrl: "http://www.xnmeun.com/file/path//upload/images/20200415/1c09615d866949379bca5a5610e1ef58.png"
      },{
        title: "湖北省信息院领导莅临研究院调研交流",
        desc: "为深入贯彻习近平总书记关于统筹疫情防控和经济社会发展的重要指示、视察湖北重要讲话精神，扎实推动科技经济深度融合、服务高质量发展，中国科协党组书记、常务副主席、书记处第一书记怀进鹏带队到湖北开展调研。",
        type: "新闻资讯",
        createTime: "2020-08-28",
        imgUrl: "http://www.xnmeun.com/file/path//upload/images/20200415/1c09615d866949379bca5a5610e1ef58.png"
      }]
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})