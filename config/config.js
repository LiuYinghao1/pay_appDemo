const APIconfig={
  "api1":{
    baseURL:'https://admin.hxwendeng.com'
  },
  "api2" : {
    baseURL : 'http://weixin.itying.com' 
  }
  
}

/**
 * 路徑白名單
 */
const pathWhiteList=[
  '/login',
  '/404',
  '401',
  '/seetings'
]

const field={
  loginCredentials:'token',
  userInfoKey:"userInfo"
}
export {APIconfig,pathWhiteList,field}