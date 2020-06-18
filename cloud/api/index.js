const cloud = require('wx-server-sdk');
const { NO_CALLBACK_CODE } = require('utils/consts.js');
const { callbackFormatter } = require('utils/index.js');

cloud.init();

const runner = { login:require('./controllers/login') };

exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    // 让我康康你这是去哪里的请求嘞
    const { api } = event;
    const [ controller, action ] = api.split('/');
    // 冲鸭
    if (runner[controller]) {
        if (runner[controller][action] && typeof runner[controller][action] === 'function') {
            return runner[controller][action]({ event, context, wxContext });
        }
        return callbackFormatter('没有这个action哦', NO_CALLBACK_CODE);
    }
    return callbackFormatter('没有这个controller哦', NO_CALLBACK_CODE);
};
