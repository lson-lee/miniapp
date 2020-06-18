const { fetchApi } = require('../utils/fetch.js');
const { callbackFormatter } = require('../utils/index.js');

const fetcher = async () => {
    const data = await fetchApi({ url:'https://zk1688.aiyongbao.com/Liveplatform/homepageGetVersion' });
    return callbackFormatter(data);
};

module.exports = { fetcher };
