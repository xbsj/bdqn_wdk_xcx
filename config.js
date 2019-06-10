/**
 * 公共配置文件
 */

var host = "http://192.168.8.63:9000";
//var host = "https://www.yyuming.vip:9000";
//var host = "https://www.wdkkgc.cn:9000";
var config = {
  host,
  //获取首页轮播信息
  indexRoundSowing: `${host}/roundAll`,

  //获取产品介绍标题
  indexProductType: `${host}/producType`,

  //获取相对应的产品介绍
  productInfo: `${host}/images`,

  //获取sessionKey
  loginSessionKeyUrl: `${host}/loginSessionKeyUrl`,

  //微信一键登陆
  loginPhone: `${host}/loginPhone`,

  //获取用户信息
  getUserInfo: `${host}/getUserInfo`,

  //修改用户信息
  updataUser: `${host}/updateuser`,

  //上传图片
  uploadimg: `${host}/xcxUpload`,

  //用户报名
  userSignUrl: `${host}/userSign`,

  //退出登陆
  loginOutUrl: `${host}/loginOut`,

  //热门推荐视频
  videoRecommend: `${host}/video/tech/recommend`,

  //获取全部课程的视频
  videoTechAll: `${host}/video/tech/all`,

  //视频类型
  videoType: `${host}/video/type/all`,
  
  //根据技术ID查询
  videoTechById: `${host}/video/tech/videoTechById`,

  //查询对应的章节
  videoChapterByTechId: `${host}/video/chapter/allByTechId`,

  //查询评论
  videoCommentByTechId:`${host}/video/comment/bytechId`,


}
module.exports = config