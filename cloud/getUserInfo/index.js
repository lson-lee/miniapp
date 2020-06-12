const cloud = require('wx-server-sdk')
// const fetchApi = require('../cloudUtil/fetchApi')

cloud.init()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // const data = await fetchApi({
  //   'url':'https://zk1688.aiyongbao.com/Liveplatform/homepageGetVersion'
  // })
  return {
    // openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
    // banana:1,
    // ...wxContext,
    // data
    event,
    context,
  }
}
