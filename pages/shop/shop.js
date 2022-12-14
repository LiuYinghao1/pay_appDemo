// pages/shop/shop.js
import ShopModel from '../../model/shop.js'
import {
  navigateTo
} from "../../utils/navigate"
import {
  addCart
} from "../../common/cart"
import Storage from '../../utils/storage'
Page({
  /**
   * 调用轮播图方法
   */
  async getBanner() {
    const reponse = await ShopModel.getShopBanner()
    this.setData({
      bannerData: reponse.data
    })
  },

  // 获取商品信息
  async getShopCode(e) {
    if(this.data.status){
      navigateTo("/pages/cart/cart")
    }
    // 获取商品条形码
    const qcode = e.detail
    // 如果条形码不存在,则不继续往下执行
    if (!qcode) return

    try {
      // 获取商品信息
      const response = await ShopModel.getShopingInfo(qcode)

      // 如果商品信息获取失败.则不继续往下执行
      if (!response.success) return

      // 获取商品信息
      const result = response.result

      // 获取商品的数据小于或等于0,说明没有当前条形码的商品数据,则不继续往下执行
      if (result.length <= 0) return

      // 将商品添加到本地
      addCart(result[0])

      //跳转到购物车页面
      navigateTo("/pages/cart/cart")
    } catch (err) {
      console.log(err);
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    bannerData: [],
    cartList: [],
    status: false,
    const:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBanner()
    // this.getCartList()
  },

  /**
   * 初始化获取商品数据
   */
  getCartList(){
    const cartList = Storage.get("carts")
    const  status = cartList.length > 0 ? true : false
    const count = cartList.length
    this.setData({
      cartList,
      status,
      count
    })

  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
      this.getCartList()
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