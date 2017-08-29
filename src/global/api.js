//接口配置
//把全体接口封装在的前端配置文件（序号与接口文档一一对应），多个环境配置时可快速切换整站式的全部接口，不用逐个页面去改。
const config = require('../../config');

let url = {
    //staticPath:config.dev.staticPath,       //开发环境静态资源路径  
    staticPath: process.env.NODE_ENV !== 'development' ?  config.build.staticPath: config.dev.staticPath
};

//----------------请注意：如果正式环境，不需要本地json数据模拟，请删除以上代码和api中的模拟接口。----------------


export const api = {

    //'login':'http://localhost:80/dataJson/login.json',//ngxin
    'hotkey':url.staticPath+'dataJson/hotkey.json',//获取搜索热门关键字
    'rankList':url.staticPath+'dataJson/rankList.json',//排行榜数据
    "recommendList":url.staticPath+"dataJson/recommendList.json",  //热门推荐数据  
    "singerList":url.staticPath+"dataJson/singerList.json",  //歌手数据 
}
