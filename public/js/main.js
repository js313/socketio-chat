const chatForm = document.getElementById('chat-form')
const messageInput = document.querySelector('#msg')
const chatMessages = document.querySelector('.chat-messages')
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})
const socket = io()

socket.emit('joinRoom', { username, room })

socket.on('message', (message) => {
    addMessage(message)
    chatMessages.scrollTop = chatMessages.scrollHeight
})

chatForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const msg = event.target.msg.value
    console.log(msg);
    messageInput.value = ""
    socket.emit('chatMessage', msg)
})

function addMessage(message) {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.body}
    </p>`
    document.querySelector('.chat-messages').appendChild(div)
}

socket.on('roomUsers', ({ room, users }) => {
    console.log("sdjbfg");
    outputRoomName(room)
    listRoomUsers(users)
})

function outputRoomName(room) {
    const roomName = document.getElementById('room-name')
    roomName.innerHTML = room
}

function listRoomUsers(users) {
    const usersList = document.getElementById('users')
    usersList.innerHTML = ''
    users.forEach(user => {
        const node = document.createElement('li')
        node.innerHTML = user.username
        usersList.appendChild(node)
    });
}