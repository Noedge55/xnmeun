// pages/partition/partition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        iconName: 'qiye',
        title: '企业库',
        url: '/pages/pools/enterprise/index/index'
      }, {
        iconName: 'xuqiu1',
        title: '需求库',
        url: '/pages/pools/demand/index/index'
      }, {
        iconName: 'chanpin',
        title: '产品库',
        url: '/pages/pools/product/index/index'
      }, {
        iconName: 'talents',
        title: '人才库',
        url: '/pages/pools/talent/index/index'
      }, {
        iconName: 'shenqing',
        title: '申请入驻'
      }, {
        iconName: 'fabu',
        title: '发布'
      }
    ],
  },

  handleTap(e) {
    console.info(e)
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
  onShow: function () {},

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