const express = require('express');

const app = express();
const server = app.listen(3000);

app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  // message received from client
  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    // message sent to client
    socket.broadcast.emit('mouse', data);
  }
}

console.log('My server is running');
