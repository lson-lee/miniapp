const { SUCCESS_CALLBACK_CODE } = require('utils/consts.js');

const callbackFormatter = (message, code = SUCCESS_CALLBACK_CODE) => {
    return {
        code,
        success:code === SUCCESS_CALLBACK_CODE,
        message,
    };
};

module.exports = { callbackFormatter };
