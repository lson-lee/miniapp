const request = require('request-promise');
type fetchArgType = {
    url: string,
    data: object | null,
    options: object | null
}

const get_options = {
    method: 'GET',
    json: true
}

export const fetchApi = ({ url = '', data = {}, options = {}} = {}) => new Promise((resolve, reject) => {
    request({
        ...get_options,
        url,
        data,
        ...options
    }).then(resolve,reject)
})
