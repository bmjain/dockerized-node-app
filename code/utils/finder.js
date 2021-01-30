const fs = require('fs');
const path = require('path');
const filepath = path.resolve(__dirname, '..', 'mock_data.json')
var mockdata = JSON.parse(fs.readFileSync(filepath));


function searchData(str) {
    var regexpStr = new RegExp(str , 'i');
    var result = mockdata.filter((vals) => {
        return regexpStr.test(vals.first_name) || regexpStr.test(vals.last_name);
    })
    return result;
}

exports.searchData = searchData
