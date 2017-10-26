if (process.env.NODE_ENV == 'production') {
    var apiDomain = '';
} else {
    var apiDomain = 'http://www.cn/'
}

export default {
    heatMapDataApi: apiDomain + 'heatmap'
}