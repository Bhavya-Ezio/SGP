const {app} = require('./router')
const http = require('http');
const socketIO = require('socket.io')

const server = http.createServer(app);
const io = socketIO(server);

//socket IO
const connectedUsers = {};

io.on('connection', (socket) => {
  // console.log('A new user just connected');

  socket.on('register', (userID) => {
    console.log(socket.id);
    connectedUsers[userID] = socket.id;
    // console.log(`${userID} registered`);
  });

  socket.on('user-logout', (userID) => {
    // console.log(`${userID} logged out`);
    delete connectedUsers[userID];
  })

});

server.listen(3000, () => console.log('Node.js server listening on port 3000'));

module.exports = io