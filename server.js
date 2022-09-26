const express = require('express')
const path = require('path')
const app = express()

const socketio = require('socket.io')
const formatMessage = require('./utils/messgaes')
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users')

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})

const botName = 'Night Bot'

const io = socketio(server)

io.on('connection', socket => {
    // io.emit('message', 'Hello everyone')    //broadcast to all the connected clients

    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room)

        socket.join(room)

        socket.emit('message', formatMessage(botName, 'Welcome to Chat Cord'))   //broadcast to only the client connected

        socket.broadcast.to(room).emit('message', formatMessage(botName, `${username} has joined the chat`))  //broadcast to all but the client that triggered this

        socket.on('chatMessage', message => {
            io.to(room).emit('message', formatMessage(username, message))
        })
        io.to(room).emit('roomUsers', {
            room,
            users: getRoomUsers(room)
        })
    })

    socket.on('disconnect', () => {
        const user = getCurrentUser(socket.id)
        if (user) {
            io.to(user.room).emit("message", formatMessage(botName, `${user.username} has left the chat`))
            userLeave(user.id)
        }
    })
})
