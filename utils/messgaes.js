const moment = require('moment')

function formatMessage(username, message) {
    return {
        username,
        body: message,
        time: moment().format('h: mm a')
    }
}

module.exports = formatMessage