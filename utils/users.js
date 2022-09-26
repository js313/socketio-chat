//Can connect a database and store stuff there.
let users = []

function userJoin(id, username, room) {
    const user = { id, username, room }
    users.push(user)
    return user
}

function getCurrentUser(id) {
    return users.find(user => {
        return user.id === id
    })
}

function userLeave(id) {
    users = users.filter(user => user.id !== id)
}

function getRoomUsers(room) {
    return users.filter(user => user.room === room)
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}