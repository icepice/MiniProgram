// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'test',
    students: [
      {id:111, name: 'alpah'},
      {id:112, name: 'bravo'},
      {id:113, name: 'charlic'},
      {id:114, name: 'delta'}
    ],
    counter: 0,
    btnText: 'http',
    imgSrc: ''
  },

  studentsFn() {
    return this.data.students.map((val) => {
      return {id: val.id + 100, name: `${val.name} --`}
    })
  },

  addCounter: function() {
    this.setData({counter: this.data.counter + 1});
    console.log(this.studentsFn());
  },

  subCounter: function() {
    this.setData({counter: this.data.counter - 1});    
  },

  testHttp() {
    wx.request({
      url: 'http://localhost:3000/course',
      success: (res) => {
        const data = res.data;
        console.log(data)
      }
    })
  },

  selectImg() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const {tempFilePaths} = res;
        this.setData({
          imgSrc: tempFilePaths[0]
        })
      },
      complete: (res) => {}
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('about lunch');
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