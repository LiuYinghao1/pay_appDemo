import Http from '../utils/http'

class TestModel extends Http{
   /**
   * 轮播图接口
   */
  static getShopBanner(){
    return Http.request({
      url : '/api/app/banner'
    },{
      header : {
        devicetype : 'H5'
      }
    })
  }

}

export default TestModel