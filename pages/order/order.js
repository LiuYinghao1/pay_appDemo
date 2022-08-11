// pages/order/order.js
import Storage from '../../utils/storage'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    initCarts:[],
    len:0,
    resultCarts:[]
  },
  /**
   * 获取所有商品信息
   * @param {*} options 
   */
  getResultShop() {
    const carts=Storage.get('carts')
    const initCarts=JSON.parse(JSON.stringify(carts))
    initCarts.length=1,
    this.setData({
      carts:initCarts,
      len:carts.length,
      initCarts,
      resultCarts:carts
    })
  },
  /**
   * 商品的展开与收起
   * @param {*} options 
   */
  handleToggleShop(){
    if(this.data.carts.length===this.data.len){
      this.setData({
        carts:this.data.initCarts
      })
    }else{
      this.setData({
        carts:this.data.resultCarts
      })
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getResultShop()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})