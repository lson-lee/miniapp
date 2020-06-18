const request = require('request-promise');

const get_options = {
    method: 'GET',
    json: true,
};

const fetchApi = ({ url = '', data = {}, options = {} } = {}) => request({
    ...get_options,
    url,
    data,
    ...options,
});

module.exports = { fetchApi };
